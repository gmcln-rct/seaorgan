import "./styles/index.scss";
// import currents20191016 from '../src/data/currents20191016';

import {ydayCurrents} from './scripts/fetchCurrentsData';
import {setUpSounds} from './scripts/setUpSounds';
import {makeSynth} from './scripts/makeSynth';
import {generateOrgan} from './scripts/generateOrgan';
import Tone from 'tone';

window.addEventListener("DOMContentLoaded", () => {
    let result;
    let notesList;

    let selection = document.getElementById('station_id');
    let el = document.getElementById('select-button');


    // assign onclick handlers to the input
    document.getElementById('select-button').onclick = function (e) {
        e.preventDefault();
        result = selection.value;
        // result = el.value;
        
        ydayCurrents(result)
            .then(
                tideObj => {
                    console.log("Tide Obj: ", tideObj);
                    notesList = setUpSounds(tideObj);
                    
                    generateOrgan(notesList);
                }
            );
    }

        // window.tideObj = tideObj;
        
    document.getElementById("app").innerText = "Hello World, I'm index.js!";
});