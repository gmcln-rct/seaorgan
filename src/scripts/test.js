// VISUALIZATIONS

const fft = new Tone.Analyser("fft", 1024);
const waveform = new Tone.Analyser("waveform", 1024);

synth.fan(waveform, fft);

let canvasWidth, canvasHeight;

const fftCanvas = document.getElementById("analyser1");
const waveCanvas = document.getElementById("analyser2");
const fftContext = fftCanvas.getContext("2d");
const waveContext = waveCanvas.getContext("2d");

//drawing the FFT
function drawFFT(values) {
    fftContext.clearRect(0, 0, canvasWidth, canvasHeight);
    let x, y, barWidth, val;
    for (var i = 0, len = values.length; i < len - 1; i++) {
        barWidth = canvasWidth / len;
        x = barWidth * i;
        val = values[i] / 255;
        y = val * canvasHeight;
        fftContext.fillStyle = "rgba(0, 0, 0, " + val + ")";
        fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
    }
}

//the waveform data
function drawWaveform(values) {
    //draw the waveform
    waveContext.clearRect(0, 0, canvasWidth, canvasHeight);
    var values = waveform.analyse();
    waveContext.beginPath();
    waveContext.lineJoin = "round";
    waveContext.lineWidth = 3;
    waveContext.strokeStyle = "#333";
    waveContext.moveTo(0, (values[0] / 255) * canvasHeight);
    for (var i = 1, len = values.length; i < len; i++) {
        var val = values[i] / 255;
        var x = canvasWidth * (i / len);
        var y = val * canvasHeight;
        waveContext.lineTo(x, y);
    }
    waveContext.stroke();
}

//size the canvases
function sizeCanvases() {
    canvasWidth = fftCanvas.offsetWidth;
    canvasHeight = fftCanvas.offsetHeight;
    waveContext.canvas.width = canvasWidth;
    fftContext.canvas.width = canvasWidth;
    waveContext.canvas.height = canvasHeight;
    fftContext.canvas.height = canvasHeight;
}

function loop() {
    requestAnimationFrame(loop);
    //get the fft data and draw it
    var fftValues = fft.analyse();
    drawFFT(fftValues);
    //get the waveform valeus and draw it
    var waveformValues = waveform.analyse();
    drawWaveform(waveformValues);
}

sizeCanvases();
loop();

