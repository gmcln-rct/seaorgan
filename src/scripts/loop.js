import {makeSynth} from './makeSynth';

export const loopSounds = (notesList) => {

    const EQUALIZER_CENTER_FREQUENCIES = [
        100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250,
        1600, 2000, 2500, 3150, 4000, 5000
    ];

    
    let leftSynth = makeSynth();
    let rightSynth = makeSynth();

    let leftPanner = new Tone.Panner(-0.5);
    let rightPanner = new Tone.Panner(0.5);

    let equalizer = EQUALIZER_CENTER_FREQUENCIES.map(frequency => {
        let filter = Tone.context.createBiquadFilter();
        filter.type = 'peaking';
        filter.frequency.value = frequency;
        filter.Q.value = 1.0;
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

    Tone.Transport.bpm.value = 100;


    // CREATE SYNTH
    const synth = new Tone.PolySynth().toMaster();

    // Create an array of notes to be played
    const timing = ['+0:2', '+6:0', '+11:2','+15:0', '+5.0', '+19:4:2', '+19:3:0'];
    const notes = ["A1", "A2", "A3", "A4", "b1", "b2", "b3", "b4", "b5", "C2", "C3", "C4", "C5", "D2", "D3", "D4", "E2", "E3", "E4", "F2", "F3", "F4", "G2", "G3", "G4"];

    // const notes = notesList;

    
    function makeTiming() {
        let timeIndex;
        let indivTiming;
        timeIndex = Math.random(timing.length);
        indivTiming = timing[timeIndex];
        return indivTiming;
    }

    // create a new sequence with the synth and notes
    const synthPart1 = new Tone.Sequence(
        function (time, note) {
            leftSynth.triggerAttackRelease(note, '5:0', makeTiming());
        },
        notes,
        "2m"
    );


    // CREATE SEQUENCE
    const synthPart2 = new Tone.Sequence(

        function (time, note) {
            // rightSynth.triggerAttackRelease(note, "100hz", time);
            rightSynth.triggerAttackRelease(note, '1:1', makeTiming());
        },
        notes,
        "8m"
    );

    synthPart1.start();
    synthPart2.start();

    // Start audio transport
    Tone.Transport.start();
};