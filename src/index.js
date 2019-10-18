import "./styles/index.scss";
// import currents20191016 from '../src/data/currents20191016';

import {ydayCurrents} from './scripts/fetchCurrentsData';
import {dropdownBlock} from './scripts/dropdown';
import {setUpSounds} from './scripts/setUpSounds';
import {loopSounds} from './scripts/loop';
import "./scripts/loop";
// import "./scripts/fetchCurrentsData";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("app").innerText = "Hello World!";

    document.getElementById("dropdown-container").innerHTML = dropdownBlock;
    
    // console.log(currents20191016);
    // console.log(ydayCurrents());
    // window.ydayCurrent = ydayCurrents;
    let notesList;

    ydayCurrents()
    .then( 
        tideObj => {
            console.log("Tide Obj: ", tideObj);
            console.log("tide Obj 1: ", tideObj[0]);
            notesList = setUpSounds(tideObj);
            loopSounds(notesList);
        }
    

    )
    
    window.tideObj = tideObj;

    // console.log( typeof tideObj);



});