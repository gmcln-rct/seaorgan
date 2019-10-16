

const EQUALIZER_CENTER_FREQUENCIES = [
    100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250,
    1600, 2000, 2500, 3150, 4000, 5000, 6300, 8000, 10000
];

function makeSynth() {
    let envelope = {
        attack: 0.1,
        release: 4,
        sustain: 5,
        releaseCurve: 'linear'
    };
    let filterEnvelope = {
        baseFrequency: 200,
        octaves: 2,
        attack: 0,
        decay: 0,
        release: 5000
    };

    return new Tone.DuoSynth({
        harmonicity: 1,
        volume: -10,
        voice0: {
            oscillator: { type: 'square' },
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
    filter.Q.value = 4.0;
    filter.gain.value = 0;
    return filter;
});

let echo = new Tone.FeedbackDelay('16n', 0.2);
let delay = Tone.context.createDelay(12.0);
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



// create a synth
const synth = new Tone.PolySynth().toMaster();
// create an array of notes to be played
const notes = ["C3", "Eb3", "G3", "Bb3", "G3", "C4"];
// create a new sequence with the synth and notes
const synthPart1 = new Tone.Sequence(
    function (time, note) {
        leftSynth.triggerAttackRelease(note, "10hz", time);
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

