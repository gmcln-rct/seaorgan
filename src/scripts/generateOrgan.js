import {makeSynth} from './makeSynth';

import Tone from 'tone';
// import { makeViz } from './viztest';

let synthPart1, synthPart2;
let leftSynth, rightSynth, echo, delay, delayFade;

let audioCtx, analyser, bufferLength, dataArray, canvas, canvasCtx, drawVisual;

export let _isPlaying = false;

export const stopOrgan = () => {
    if (_isPlaying) {
        console.log("trying to stop...")


        synthPart1 = new Tone.Sequence();
        synthPart2 = new Tone.Sequence();
 
        
        synthPart1.removeAll();
        synthPart1.stop();

        synthPart2.removeAll();
        synthPart2.stop();

        // Stop Transport
        Tone.Transport.stop();

        // synths
        console.log("disconnecting synths....")
        leftSynth.disconnect();
        rightSynth.disconnect();

        console.log("disconnecting effects....")
        echo.disconnect();
        delay.disconnect();
        delayFade.disconnect();

        // debugger
        console.log("transport state: " + Tone.Transport.state)
        if (Tone.Transport.state !== "started") {
            _isPlaying = false;
            console.log("Transport stopped")
        } else {
            console.log("Transport didn't stop");
        }

        console.log('disposing....')
        synthPart1.dispose();
        synthPart2.dispose();
        echo.dispose();
        console.log("disposed")
    }
};

export const generateOrgan = (notesList) => {
    
    const EQUALIZER_CENTER_FREQUENCIES = [
        125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250,
        1600, 2000, 2500, 3150, 4000, 5000
    ];

     leftSynth = makeSynth();
     rightSynth = makeSynth();

    let leftPanner = new Tone.Panner(-0.5);
    let rightPanner = new Tone.Panner(0.5);

    let equalizer = EQUALIZER_CENTER_FREQUENCIES.map(frequency => {
        let filter = Tone.context.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = frequency;
        filter.Q.value = 4.31;
        filter.gain.value = 4;
        return filter;
    });

    echo = new Tone.FeedbackDelay('16n', 0.2);
    delay = Tone.context.createDelay(11.0);
    delayFade = Tone.context.createGain();

    delay.delayTime.value = 4.0;
    delayFade.gain.value = 0.75;

    leftSynth.connect(leftPanner);
    rightSynth.connect(rightPanner);

    leftPanner.connect(equalizer[0]);
    rightPanner.connect(equalizer[0]);

    equalizer.forEach((equalizerBand, index) => {
        if (index < equalizer.length - 1) {
            equalizerBand.connect(equalizer[index + 1]);
        } else {
            equalizerBand.connect(echo);
        }
    });

    echo.toMaster();
    echo.connect(delay);

    delay.connect(Tone.context.destination);
    delay.connect(delayFade);
    delayFade.connect(delay);

    // Slow Transport bpw Down
    Tone.Transport.bpm.value = 100;

    // Create an array of notes to be played
    const timing = ['+0:2', '+6:0', '+11:2','+15:0', '+5.0', '+19:4:2', '+19:3:0'];

    function makeTiming() {
        let timeIndex;
        let indivTiming;
        timeIndex = Math.random(timing.length);
        indivTiming = timing[timeIndex];
        return indivTiming;
    }
    
    // Use imported list from SetUpSounds
    const notes = notesList;
    
    let synthStart = false;
    // CREATE SEQUENCE 1
    const synthPart1 = new Tone.Sequence(
        function (time, note) {
            event.humanize = true;
            leftSynth.triggerAttackRelease(note, '5:0', makeTiming());
            synthStart = true;
        },
        notes,
        "2m"
    );


    // CREATE SEQUENCE 2
    const synthPart2 = new Tone.Sequence(

        function (time, note) {

            event.humanize = true;
            rightSynth.triggerAttackRelease(note, '1:1', makeTiming());
            synthStart = true;

        },
        notes,
        "4m"
    );


    synthPart1.humanize = true;
    synthPart2.humanize = true;

    synthPart1.start();
    synthPart2.start();

    // START AUDIO TRANSPORT
    Tone.Transport.start();

    _isPlaying = true;


// ------------------
    // VISUALIZER 
    // Currently just doing FFT

    let fftNum = 4096;
    const fft = new Tone.Analyser("fft", fftNum);
    const waveform = new Tone.Analyser("waveform", 1024);

    leftSynth.fan(waveform, fft);
    rightSynth.fan(waveform, fft);

    let canvasWidth, canvasHeight;

    const fftCanvas = document.getElementById("viz-canvas");
    const fftContext = fftCanvas.getContext("2d");


    // drawing the FFT
    function drawFFT(values) {
        fftContext.clearRect(0, 0, canvasWidth, canvasHeight);
        let x, y, barWidth, val;
        for (let i = 0, len = values.length; i < len - 1; i++) {
            barWidth = canvasWidth / len;
            x = barWidth * i;
            
            val = Math.abs(values[i] / 255);
            y = val * canvasHeight;
            fftContext.fillStyle = "rgba(255, 255, 204, " + val + ")";

            // fftContext.fillStyle = "rgba(31, 178, 204, " + val + ")";
            fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
        }
    }

    //size the canvases
    function sizeCanvases() {
        canvasWidth = fftCanvas.offsetWidth;
        canvasHeight = fftCanvas.offsetHeight;
        fftContext.canvas.width = canvasWidth;
        fftContext.canvas.height = canvasHeight;

    }

    function loop() {
        requestAnimationFrame(loop);
            //get the fft data and draw it
            drawFFT(fft.getValue());
            // console.log(fft.getValue());

    }

 
    let synthInterval = setInterval( () => {
            if (synthStart) {
                sizeCanvases();
                loop();
                clearInterval(synthInterval);
            }
        }, 10);

    Tone.BufferSource.prototype.start = function (time, offset, duration, gain) {
        // Prevent buffer playback if we have exceeded max # buffers playing
        // (or if there's no volume... what's the point?
        if (_playingBuffers.length >= MAX_BUFFERS || gain <= 0) return this;

        _playingBuffers.push(this);
        _numPlayedNotesThisInterval++;

        this.onended = function (buffer) {
            buffer.dispose();
            let index = _playingBuffers.indexOf(buffer);
            if (index > -1) {
                _playingBuffers.splice(index, 1);
            }
        };

        return bufferSourceStart.bind(this)(time, offset, duration, gain);
    };
    
};