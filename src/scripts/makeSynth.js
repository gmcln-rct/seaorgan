export const makeSynth = () => {
    let envelope = {
        attack: 1.5,
        release: 4,
        sustain: 5,
        attackCurve: 'exponential',
        releaseCurve: 'linear'
    };
    let filterEnvelope = {
        baseFrequency: 200,
        octaves: 2,
        attack: 0,
        decay: 0,
        release: 2000
    };

    return new Tone.PolySynth({
        harmonicity: 12,
        volume: -10,
        voice0: {
            oscillator: { type: 'ripple' },
            envelope,
            filterEnvelope
        },
        voice1: {
            oscillator: { type: 'bounce' },
            envelope,
            filterEnvelope
        },
        voice2: {
            oscillator: { type: 'triangle' },
            envelope,
            filterEnvelope
        },


    });
}