import Tone from 'tone';

// SETS UP SYNTHESIZER FOR LOOP

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

    let tremolo = new Tone.Tremolo(20, 3);
    
    return new Tone.PolySynth({
        harmonicity: 2,
        resonance: 800,
        volume: -19,
        voice0: {
            oscillator: { type: 'cosine' },
            envelope,
            filterEnvelope
        },
        voice1: {
            oscillator: { type: 'cosine' },
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