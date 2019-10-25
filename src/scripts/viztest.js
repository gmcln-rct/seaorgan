<<<<<<< HEAD
function draw() {
    let WIDTH = visualizer.width
    let HEIGHT = visualizer.height

    // loop this
    window.requestAnimationFrame(draw)

    // get the current Data (gets placed into array arg)
    player.getAnalyzerTimeBytes(1, f1visualData)
    player.getAnalyzerTimeBytes(2, f2visualData)
    player.getAnalyzerTimeBytes(3, f3visualData)

    // set the canvas style
    vCtx.fillStyle = '#EEE'
    vCtx.fillRect(0, 0, WIDTH, HEIGHT)
    vCtx.lineWidth = 2

    // now that we have the current Data for each wave, loop
    // through each and draw each point value
    drawWave(player.getAnalyzerFFTSize(1), '#26a69a', f1visualData)
    drawWave(player.getAnalyzerFFTSize(2), '#ec407a', f2visualData)
    drawWave(player.getAnalyzerFFTSize(3), '#29b6f6', f3visualData)

    function drawWave(bufferLength, color, dataArray) {
        // draw the path - loop through
        // the Uint8Array and draw each pt
        vCtx.beginPath()
        vCtx.strokeStyle = color

        // space between each point
        let sliceWidth = WIDTH * 0.75 / bufferLength

        // x position to draw current pt
        // incremented by sliceWidth
        let x = 0

        dataArray.forEach(soundVal => {
            // (0, 255) / 256.0 -> (0.0, 1.0]
            let y = (dataArray[soundVal] / 256.0) * HEIGHT

            // on first value, go to beginning
            soundVal === 0
                ? vCtx.moveTo(x, y)
                : vCtx.lineTo(x, y)

            x += sliceWidth
        })

        vCtx.lineTo(WIDTH, HEIGHT / 2)
        vCtx.stroke()
    }
}
=======

import Tone from 'tone';

let audioCtx, analyser, bufferLength, dataArray, canvas, canvasCtx, drawVisual;


export const makeViz = () => {
    
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    // audioCtx = new Tone.Context();
    // analyser = new Tone.FFT;

    analyser.fftSize = 256;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    
    
    canvas = document.getElementById("viz-canvas");
    canvasCtx = canvas.getContext("2d");
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    // draw an oscilloscope of the current audio source

    function draw() {
        drawVisual = requestAnimationFrame(draw);
        console.log("draw visual");
        analyser.getByteFrequencyData(dataArray);

        canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);


        let barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;


        for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] / 2;

                // canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
            canvasCtx.fillStyle = 'rgb(50,50,50)';

                canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);

                x += barWidth + 1;
            }
    

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    }
    draw();

};
>>>>>>> master
