// FROM INDEX.HTML

// <script type="text/javascript" src="./src/scripts/nexusUI.js"></script>
//     <!--Progress Bar-- >
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.js"
//             integrity="sha256-a5YRB27CcBwBFcT5EF/f3E4vzIqyHrSR878nseNYw64=" crossorigin="anonymous"></script>

//         <!--Instruments -->
//             <script type="text/javascript" src="./src/scripts/instruments.js"></script>

//             <!--Keybaoard -->
//                 <script type="text/javascript" src="./src/scripts/keyboard.js"></script>


NProgress.start();
// load samples //
let samples = SampleLibrary.load({
    instruments: ['bassoon', 'flute', 'french-horn', 'tuba'],
    baseUrl: "/src/samples/"
})
// show keyboard on load //
let current
Tone.Buffer.on('load', function () {
    document.querySelector(".container").style.display = 'block';
    document.querySelector("#loading").style.display = 'none';
    NProgress.done();
    // loop through instruments and set release, connect to master output
    for (let property in samples) {
        if (samples.hasOwnProperty(property)) {
            console.log(samples[property])
            samples[property].release = 1.5;
            samples[property].toMaster();
        }
    }
    current = samples['bassoon'];
    select.on('change', function (v) {
        current = samples[v.value];
    })
})
Tone.Buffer.on('error', function () {
    document.querySelector("#loading").innerHTML = "Error loading the samples.";
})

// create Nexus UI //
Nexus.colors.accent = "#f00000"
let select = new Nexus.Select('#Selector', {
    'size': [300, 30],
    'options': Object.keys(samples)
});
let keyboardUI = new Nexus.Piano('#Keyboard', {
    'size': [1000, 125],
    'mode': 'button', // 'button', 'toggle', or 'impulse'
    'lowNote': 36,
    'highNote': 72
})

keyboardUI.on('change', function (note) {
    console.log(Tone.Frequency(note.note, "midi").toNote());
    if (note.state === true) {
        current.triggerAttack(Tone.Frequency(note.note, "midi").toNote());
    } else if (note.state === false) {
        current.triggerRelease(Tone.Frequency(note.note, "midi").toNote());
    }
})