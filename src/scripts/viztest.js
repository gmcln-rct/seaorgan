
import Tone from 'tone';
let audioCtx, analyser, bufferLength, dataArray, canvas, canvasCtx;


export const makeViz = () => {


     audioCtx = new Tone.Context();
     analyser = audioCtx.createAnalyser();

    analyser.fftSize = 2048;
     bufferLength = analyser.frequencyBinCount;
     dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);

    // Get a canvas defined with ID "oscilloscope"
    
    canvas = document.getElementById("viz-canvas");
    
    canvasCtx = canvas.getContext("2d");

    // draw an oscilloscope of the current audio source

    function draw() {

        requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        canvasCtx.fillStyle = "rgb(200, 200, 200)";
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "rgb(0, 0, 0)";

        canvasCtx.beginPath();

        let sliceWidth = canvas.width * 1.0 / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {

            let v = dataArray[i] / 128.0;
            let y = v * canvas.height / 2;

            if (i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    }
    draw();

};