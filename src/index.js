import "./styles/index.scss";

import { ydayCurrents } from './scripts/fetchCurrentsData';
import { setUpSounds } from './scripts/setUpSounds';
import { generateOrgan, stopOrgan, _isPlaying } from './scripts/generateOrgan';
import StartAudioContext from 'startaudiocontext';


window.addEventListener("DOMContentLoaded", () => {
    let result, notesList, elem;

    let selection = document.getElementById('station_id');

    elem = document.getElementById('select-button');

    // StartAudioContext(Tone.context, 'select-button');


    elem.onclick = function (e) {
        e.preventDefault();
        result = selection.value;
        if (_isPlaying) {
            stopOrgan();
            selection.selectedIndex = 0;
            elem.setAttribute('class', 'play-button');
            elem.value = "Play Organ";
            // Stop Transport
        } else {
            StartAudioContext(Tone.context, '#select-button')
                .then( () => {
                    ydayCurrents(result)
                        .then(
                            tideObj => {
                                console.log("Tide Obj: ", tideObj);
                                notesList = setUpSounds(tideObj);
                                generateOrgan(notesList);
                            }
                        )
                        .then( () => {
                            elem.value = "Stop Organ";
                            elem.setAttribute('class', 'stop-button');
                        });
                    })

        };
        
    }

});