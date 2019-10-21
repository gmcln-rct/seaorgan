
export const createEqualizerFilter = () => {

    const EQUALIZER_CENTER_FREQUENCIES = [
        125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250,
        1600, 2000, 2500, 3150, 4000, 5000
    ];
    let echo = new Tone.FeedbackDelay('16n', 0.2);
    let equalizer = EQUALIZER_CENTER_FREQUENCIES.map(frequency => {
        let filter = Tone.context.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = frequency;
        filter.Q.value = 1.0;
        filter.gain.value = 1;
        return filter;
    });

    equalizer.forEach((equalizerBand, index) => {
        if (index < equalizer.length - 1) {
            equalizerBand.connect(equalizer[index + 1]);
        } else {
            equalizerBand.connect(echo);
        }
    });


    return equalizer;
}
