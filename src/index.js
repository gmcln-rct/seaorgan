import "./styles/index.scss";
// import currents20191016 from '../src/data/currents20191016';

import {ydayCurrents} from './scripts/fetchCurrentsData';
import {dropdownBlock} from './scripts/dropdown';
import {setUpSounds} from './scripts/setUpSounds';
import {loopSounds} from './scripts/loop';
import "./scripts/loop";
// import "./scripts/fetchCurrentsData";

window.addEventListener("DOMContentLoaded", () => {

    let result;
    let notesList;
    // document.getElementById("dropdown-container").innerHTML = dropdownBlock;

    ydayCurrents(result)
    .then( 
        tideObj => {
            console.log("Tide Obj: ", tideObj);
            notesList = setUpSounds(tideObj);
            loopSounds(notesList);
        }
        );
        
        // window.tideObj = tideObj;
        
        document.getElementById("app").innerText = "Hello World, I'm index.js!";
});