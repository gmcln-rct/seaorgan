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
        if (!selection.value) {
            alert('Please select Coastal Station');
        }
        result = selection.value;
 

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
            // console.log("Larry");
            // document.getElementById('stop-button').value = "Larry";
            
        };

    }
        
    // document.getElementById("app").innerText = "Hello World, I'm index.js!";
});