// var sampler = new Tone.Sampler({
//     "A0": "../samples/french-horn/A0.mp3",
//     "A2": "../samples/french-horn/A2.mp3",
//     "C1": "../samples/french-horn/C1.mp3",
//     "C3": "../samples/french-horn/C3.mp3",
//     "D2": "../samples/french-horn/D2.mp3",
//     "D4": "../samples/french-horn/D4.mp3",
//     "Ds1": "../samples/french-horn/Ds1.mp3",
//     "F2": "../samples/french-horn/F2.mp3",
//     "F4": "../samples/french-horn/F4.mp3",
//     "G1": "../samples/french-horn/G1.mp3",
// }, function () {
//     sampler.triggerAttack("D3")
// })	



const EQUALIZER_CENTER_FREQUENCIES = [
    100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250,
    1600, 2000, 2500, 3150, 4000, 5000, 6300, 8000, 10000
];

function makeSynth() {
    let envelope = {
        attack: 0.1,
        release: 4,
        releaseCurve: 'linear'
    };
    let filterEnvelope = {
        baseFrequency: 200,
        octaves: 2,
        attack: 0,
        decay: 0,
        release: 2000
    };

    return new Tone.DuoSynth({
        harmonicity: 1,
        volume: -20,
        voice0: {
            oscillator: { type: 'sawtooth' },
            envelope,
            filterEnvelope
        },
        voice1: {
            oscillator: { type: 'sine' },
            envelope,
            filterEnvelope
        },
        vibratoRate: 0.5,
        vibratoAmount: 0.1
    });
}

let leftSynth = makeSynth();
let rightSynth = makeSynth();
let leftPanner = new Tone.Panner(-0.5);
let rightPanner = new Tone.Panner(0.5);

let equalizer = EQUALIZER_CENTER_FREQUENCIES.map(frequency => {
    let filter = Tone.context.createBiquadFilter();
    filter.type = 'peaking';
    filter.frequency.value = frequency;
    filter.Q.value = 4.31;
    filter.gain.value = 0;
    return filter;
});

let echo = new Tone.FeedbackDelay('16n', 0.2);
let delay = Tone.context.createDelay(6.0);
let delayFade = Tone.context.createGain();

delay.delayTime.value = 6.0;
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

// var player = new Tone.Player("../samples/flute/A3.mp3").toMaster();


// create a synth
const synth = new Tone.NoiseSynth().toMaster();
// create an array of notes to be played
const notes = ["C3", "Eb3", "G3", "Bb3", "G3" ];
// create a new sequence with the synth and notes
const synthPart1 = new Tone.Sequence(
    function (time, note) {
        leftSynth.triggerAttackRelease(note, "15hz", time);
    },
    notes,
    "2n"
);

const synthPart2 = new Tone.Sequence(
    function (time, note) {
        rightSynth.triggerAttackRelease(note, "100hz", time);
    },
    notes,
    "1n"
);



// Setup the synth to be ready to play on beat 1
synthPart1.start();
synthPart2.start();
// Note that if you pass a time into the start method 
// you can specify when the synth part starts 
// e.g. .start('8n') will start after 1 eighth note
// start the transport which controls the main timeline
Tone.Transport.start();


// create a new sequence with the synth and notes
// const synthPart = new Tone.Sequence(
//     function (time, note) {
//         synth.triggerAttackRelease(note, "100hz", time);
//     },
//     notes,
//     "1n"
// );