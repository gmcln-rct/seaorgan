import "./styles/index.scss";

import {ydayCurrents} from './scripts/fetchCurrentsData';
import {setUpSounds} from './scripts/setUpSounds';
import {generateOrgan, stopOrgan, _isPlaying} from './scripts/generateOrgan';
import StartAudioContext from 'startaudiocontext';


window.addEventListener("DOMContentLoaded", () => {
    let result;
    let notesList;

    let selection = document.getElementById('station_id');

    StartAudioContext(Tone.context, 'select-button')

    document.getElementById('select-button').onclick = function (e) {
        e.preventDefault();
        result = selection.value;
        if (_isPlaying) {
            stopOrgan();
        };

        ydayCurrents(result)
            .then(
                tideObj => {
                    console.log("Tide Obj: ", tideObj);
                    notesList = setUpSounds(tideObj);
                    generateOrgan(notesList);
                }
            );
    }
        
    // document.getElementById("app").innerText = "Hello World, I'm index.js!";
});