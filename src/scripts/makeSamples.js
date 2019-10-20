export const makeSamples = () => { 

    let SampleLibrary = {
        minify: false,
        ext: '.[mp3|ogg]', // use setExt to change the extensions on all files // do not change this variable //
        baseUrl: '../src/samples/french-horn/',
        list: ['french-horn'],
        onload: null,

        setExt: function (newExt) {
            var i
            for (i = 0; i <= this.list.length - 1; i++) {
                for (var property in this[this.list[i]]) {

                    this[this.list[i]][property] = this[this.list[i]][property].replace(this.ext, newExt)
                }

            }
            this.ext = newExt;
            return console.log("sample extensions set to " + this.ext)
        },

        load: function (arg) {
            var t, rt, i;
            (arg) ? t = arg : t = {};
            t.instruments = t.instruments || this.list;
            t.baseUrl = t.baseUrl || this.baseUrl;
            t.onload = t.onload || this.onload;

            // update extensions if arg given
            if (t.ext) {
                if (t.ext != this.ext) {
                    this.setExt(t.ext)
                }
                t.ext = this.ext
            }

            rt = {};

            // if an array of instruments is passed...
            if (Array.isArray(t.instruments)) {
                for (i = 0; i <= t.instruments.length - 1; i++) {
                    var newT = this[t.instruments[i]];
                    //Minimize the number of samples to load
                    if (this.minify === true || t.minify === true) {
                        var minBy = 1;
                        if (Object.keys(newT).length >= 17) {
                            minBy = 2
                        }
                        if (Object.keys(newT).length >= 33) {
                            minBy = 4
                        }
                        if (Object.keys(newT).length >= 49) {
                            minBy = 6
                        }

                        var filtered = Object.keys(newT).filter(function (_, i) {
                            return i % minBy != 0;
                        })
                        filtered.forEach(function (f) {
                            delete newT[f]
                        })

                    }




                    rt[t.instruments[i]] = new Tone.Sampler(
                        newT, {
                        baseUrl: t.baseUrl + t.instruments[i] + "/",
                        onload: t.onload
                    }

                    )
                }

                return rt

                // if a single instrument name is passed...
            } else {
                newT = this[t.instruments];

                //Minimize the number of samples to load
                if (this.minify === true || t.minify === true) {
                    minBy = 1;
                    if (Object.keys(newT).length >= 17) {
                        minBy = 2
                    }
                    if (Object.keys(newT).length >= 33) {
                        minBy = 4
                    }
                    if (Object.keys(newT).length >= 49) {
                        minBy = 6
                    }

                    filtered = Object.keys(newT).filter(function (_, i) {
                        return i % minBy != 0;
                    })
                    filtered.forEach(function (f) {
                        delete newT[f]
                    })
                }


                var s = new Tone.Sampler(
                    newT, {
                    baseUrl: t.baseUrl + t.instruments + "/",
                    onload: t.onload
                }
                )

                return s
            }

        },

        

        'french-horn': {
            'D2': 'D2.[mp3|ogg]',
            'D4': 'D4.[mp3|ogg]',
            'D#1': 'Ds1.[mp3|ogg]',
            'F2': 'F2.[mp3|ogg]',
            'F4': 'F4.[mp3|ogg]',
            'G1': 'G1.[mp3|ogg]',
            'A0': 'A0.[mp3|ogg]',
            'A2': 'A2.[mp3|ogg]',
            'C1': 'C1.[mp3|ogg]',
            'C3': 'C3.[mp3|ogg]',

        }


    }

    let samples = SampleLibrary.load({
        instruments: ['french-horn'],
        baseUrl: "./src/samples/"
    })


    // show keyboard on load //
    let current
    Tone.Buffer.on('load', function () {

        // loop through instruments and set release, connect to master output
        for (var property in samples) {
            if (samples.hasOwnProperty(property)) {
                console.log(samples[property])
                samples[property].release = .5;
                samples[property].toMaster();
            }
        }


    })



};