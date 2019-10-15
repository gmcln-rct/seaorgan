let SampleLibrary = {
    minify: false,
    ext: '.[mp3|ogg]', // use setExtension to change the extensions on all files //
    baseUrl: '/samples/',
    list: ['bassoon', 'flute', 'french-horn', 'tuba'],
    onload: null,

    setExtension: function (newExtension) {
        let i
        for (i = 0; i <= this.list.length - 1; i++) {
            for (let property in this[this.list[i]]) {
                this[this.list[i]][property] = this[this.list[i]][property].replace(this.ext, newExtension)
            }
        }
        this.ext = newExtension;
        return console.log("sample extensions set to " + this.ext)
    },

    load: function (arg) {
        let t, rt, i;
        (arg) ? t = arg : t = {};
        t.instruments = t.instruments || this.list;
        t.baseUrl = t.baseUrl || this.baseUrl;
        t.onload = t.onload || this.onload;

        // update extensions if arg given
        if (t.ext) {
            if (t.ext != this.ext) {
                this.setExtension(t.ext)
            }
            t.ext = this.ext
        }

        rt = {};

        // if an array of instruments is passed...
        if (Array.isArray(t.instruments)) {
            for (i = 0; i <= t.instruments.length - 1; i++) {
                let newT = this[t.instruments[i]];
                //Minimize the number of samples to load
                if (this.minify === true || t.minify === true) {
                    let minBy = 1;
                    if (Object.keys(newT).length >= 17) {
                        minBy = 2
                    }
                    if (Object.keys(newT).length >= 33) {
                        minBy = 4
                    }
                    if (Object.keys(newT).length >= 49) {
                        minBy = 6
                    }

                    let filtered = Object.keys(newT).filter(function (_, i) {
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
                })
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

            let s = new Tone.Sampler(
                newT, {
                baseUrl: t.baseUrl + t.instruments + "/",
                onload: t.onload
            }
            )

            return s
        }

    },

    
    'bassoon': {
        'A3': 'A3.[mp3|ogg]',
        'C2': 'C2.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'G1': 'G1.[mp3|ogg]',
        'G2': 'G2.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'A1': 'A1.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]'

    },


    'flute': {
        'A5': 'A5.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C6': 'C6.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'E5': 'E5.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]'

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

    },

    
    'tuba': {
        'A#1': 'As1.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'F0': 'F0.[mp3|ogg]',
        'F1': 'F1.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'A#0': 'As0.[mp3|ogg]'

    }


}