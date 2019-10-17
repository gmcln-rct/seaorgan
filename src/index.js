import "./styles/index.scss";
// import currents20191016 from '../src/data/currents20191016';

import {ydayCurrents} from './scripts/fetchCurrentsData';
import {makeNoteList} from './scripts/notesMaker';
import {dropdownBlock} from './scripts/dropdown';
import "./scripts/loop";
import "./scripts/fetchCurrentsData";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("app").innerText = "Hello World!";

    document.getElementById("dropdown-container").innerHTML = dropdownBlock;
    
    // console.log(currents20191016);
    // console.log(ydayCurrents());
    // window.ydayCurrent = ydayCurrents;


    let tideObj = ydayCurrents();
    window.tideObj = tideObj;

    console.log( typeof tideObj);
    let tideArray = Array.from(tideObj);
    console.log("Tide Obj:", tideObj);
    console.log("tide obj 1: ", tideObj["0"]);


});