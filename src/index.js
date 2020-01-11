import "./styles/index.scss";

import { ydayCurrents } from './scripts/fetchCurrentsData';
import { setUpSounds } from './scripts/setUpSounds';
import { generateOrgan, stopOrgan, _isPlaying } from './scripts/generateOrgan';
import StartAudioContext from 'startaudiocontext';


window.addEventListener("DOMContentLoaded", () => {
    let result, notesList, elem;

    let selection = document.getElementById('station_id');

    StartAudioContext(Tone.context, 'select-button');

    elem = document.getElementById('select-button');

    elem.onclick = function (e) {
        e.preventDefault();
        result = selection.value;
        if (_isPlaying) {
            stopOrgan();
            selection.selectedIndex = 0;
            elem.value = "Play Organ"
        } else {
            ydayCurrents(result)
                .then(
                    tideObj => {
                        console.log("Tide Obj: ", tideObj);
                        notesList = setUpSounds(tideObj);
                        generateOrgan(notesList);
                    }
                )
                .then(
                    elem.value = "Stop Organ"
                );
        };
        
    }

});