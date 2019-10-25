

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