import "./styles/index.scss";

import {ydayCurrents} from './scripts/fetchCurrentsData';
import {setUpSounds} from './scripts/setUpSounds';
import {generateOrgan, stopOrgan, _isPlaying} from './scripts/generateOrgan';
import StartAudioContext from 'startaudiocontext';


window.addEventListener("DOMContentLoaded", () => {
    let result;
    let notesList;

    let selection = document.getElementById('station_id');

    // PLAY AUDIO
    document.getElementById('select-button').onclick = function (e) {
        e.preventDefault();
        result = selection.value;
        if (_isPlaying) {
            stopOrgan();
        };

        StartAudioContext(Tone.context)
            .then(() => {
                ydayCurrents(result)
                    .then(
                        tideObj => {

                            console.log("Tide Obj: ", tideObj);
                            notesList = setUpSounds(tideObj);
                            generateOrgan(notesList);
                        }
                         )
                        }
            );
    }

    document.getElementById('stop-button').onclick = function (e) {
        e.preventDefault();
        if (_isPlaying) {
            stopOrgan();
        };

    }
        
    // document.getElementById("app").innerText = "Hello World, I'm index.js!";
});