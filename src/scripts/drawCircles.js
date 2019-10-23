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

// this is the function we'll call from Tone.Draw.schedule to put up
// the random circles
export const drawCircle = () => {
    ctx.beginPath();
    ctx.fillStyle = "rgb(" + parseInt(randcolor.value) + "," + parseInt(randcolor.value) + "," + parseInt(randcolor.value) + ")";
    // params are: Xlocation, Ylocation, radiues,  start arc, end arc (radians)
    ctx.arc(randx.value, randy.value, randrad.value, 0, 2 * Math.PI);
    ctx.fill();
}


// sound
// var notesynth = new Tone.MonoSynth().toMaster();

// function startit() {
//     Tone.Transport.start(); // start the transport for timing

//     // play a note 0.4 seconds from now
//     Tone.Transport.schedule(playnote, "+0.4");
// }

// function stopit() {
//     Tone.Transport.stop();
// }

// function playnote() {
//     notesynth.triggerAttackRelease("C2", 0.2);
//     // schedule the next note
//     Tone.Transport.schedule(playnote, "+0.4");

//     // ok, we'll use the Tone system to call the drawing function
//     Tone.Draw.schedule(drawcirc, "+0.4");
// }