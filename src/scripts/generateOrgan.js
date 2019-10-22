import {makeSynth} from './makeSynth';

import Tone from 'tone';
import { makeViz } from './viztest';

export const stopOrgan = () => {
    if (Tone.context === 'running') {
        Tone.Transport.dispose();

    }
}

export const generateOrgan = (notesList) => {

    const EQUALIZER_CENTER_FREQUENCIES = [
        125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250,
        1600, 2000, 2500, 3150, 4000, 5000
    ];

    // Tone.context.state = "stopped";
    // debugger

    stopOrgan();

    let leftSynth = makeSynth();
    let rightSynth = makeSynth();

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

    let echo = new Tone.FeedbackDelay('16n', 0.2);
    let delay = Tone.context.createDelay(11.0);
    let delayFade = Tone.context.createGain();

    delay.delayTime.value = 10.0;
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
    
    // const notes = ["A1", "A2", "A3", "A4", "b1", "b2", "b3", "b4", "b5", "C2", "C3", "C4", "C5", "D2", "D3", "D4", "E2", "E3", "E4", "F2", "F3", "F4", "G2", "G3", "G4"];
    // Use imported list from SetUpSounds
    const notes = notesList;
    

    // CREATE SEQUENCE 1
    const synthPart1 = new Tone.Sequence(
        function (time, note) {
            console.log('synthPart 1 starting');
            event.humanize = true;
            leftSynth.triggerAttackRelease(note, '5:0', makeTiming());
        },
        notes,
        "2m"
    );


    // CREATE SEQUENCE 2
    const synthPart2 = new Tone.Sequence(

        function (time, note) {
            event.humanize = true;
            rightSynth.triggerAttackRelease(note, '1:1', makeTiming());
        },
        notes,
        "8m"
    );

    synthPart1.humanize = true;
    synthPart2.humanize = true;


    synthPart1.start();
    synthPart2.start();

    // START AUDIO TRANSPORT
    Tone.Transport.start();


};