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
    // let elem = document.getElementById('select-button');
    let elem = document.querySelector('.play-button');

    elem.onclick = function (e) {
        e.preventDefault();
        if (!selection.value) {
            alert('Please select Coastal Station');
        } else {
            elem.setAttribute('class','stop-button');
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
        
                    elem2.setAttribute('class', 'play-button');
                    elem2.value = 'Play Organ';
                    selection.selectedIndex = 0;
                };
            }

            // END OF INITIAL CLICK
        };



});