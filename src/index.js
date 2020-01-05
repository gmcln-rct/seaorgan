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
    let elem = document.getElementById('select-button');
    elem.onclick = function (e) {
        e.preventDefault();
        if (!selection.value) {
            alert('Please select Coastal Station');
        } else {
            elem.className = 'stop-button';
            elem.value = 'Stop Organ';
            result = selection.value;
 
            StartAudioContext(Tone.context,'#select-button')
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
                )
            }

            // STOP AUDIO
            let elem2 = document.querySelector('.stop-button');
            elem2.onclick = function (e) {
                e.preventDefault();
                if (_isPlaying) {
                    stopOrgan();
                    elem2.removeAttribute("class");
                    elem2.value = 'Play Organ';
                    selection.selectedIndex = 0;
                };
            }

    };

});