import Tone from 'tone';


// graphics
let canvas = document.getElementById("viz-canvas");
let ctx = canvas.getContext("2d");

let width = canvas.getAttribute("width");
let height = canvas.getAttribute("height");

// for random colors
let randcolor = new Tone.CtrlRandom(0, 255);
// and random positions
let randx = new Tone.CtrlRandom(0, width);
let randy = new Tone.CtrlRandom(0, height);
// for random radii
let randrad = new Tone.CtrlRandom(10, 30);

let docircle;
let countdown;
let alphaval;
let red, blue, green;
let xloc, yloc, rad;

export const drawCircle = () => {
    if (docircle == 1) {
        // set these here so we can use them as we 'fade' the circle
        // red = parseInt(randcolor.value);
        // blue = parseInt(randcolor.value);
        // green = parseInt(randcolor.value);
        xloc = randx.value;
        yloc = randy.value;
        rad = randrad.value;
        alphaval = 1.0; // set this initially, and then use it to fade
        countdown = 30; // 'countdown' is the thing we increment for the fade
        docircle = 0;
    }
    if (countdown-- > 0) {
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(xloc, yloc, rad, 0, 2 * Math.PI);
        ctx.fill();
        alphaval -= (1 / countdown); // here's where we fade the alphaval
    }
    if (countdown == 0) {
        ctx.clearRect(0, 0, width, height);
    }

    requestAnimationFrame(drawCircle);
}
