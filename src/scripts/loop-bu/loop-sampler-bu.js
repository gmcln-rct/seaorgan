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
//     sampler.triggerAttackRelease("C1")
// })	

let sampler = new Tone.Sampler({
    'C4': 'https://tonejs.github.io/examples/audio/casio/C2.mp3'
}, {
    curve: "linear",
    onload: () => {
        sampler.triggerAttackRelease('C4', 2000)
    },
    attack: 5 // is this supposed to be 5 seconds?
}).toMaster();

Tone.Transport.start();
