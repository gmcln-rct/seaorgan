import Tone from 'tone';

// SETS UP SYNTHESIZER FOR LOP

export const makeSynth = () => {
    let envelope = {
        attack: 1.5,
        release: 4,
        sustain: 5,
        releaseCurve: 'linear'
    };
    let filterEnvelope = {
        baseFrequency: 200,
        octaves: 2,
        attack: 0,
        decay: 0,
        release: 2000
    };

    // let chorus = new Tone.Chorus(4, 2.5, 0.5);

    let tremolo = new Tone.Tremolo(20, 3);
    
    return new Tone.PolySynth({
        harmonicity: 2,
        volume: -15,
        voice0: {
            oscillator: { type: 'triangle' },
            envelope,
            filterEnvelope
        },
        voice1: {
            oscillator: { type: 'triangle' },
            envelope,
            filterEnvelope
        },
        voice2: {
            oscillator: { type: 'bounce' },
            envelope,
            filterEnvelope
        },


    }).connect(tremolo);
}