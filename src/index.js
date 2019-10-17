import "./styles/index.scss";
// import currents20191016 from '../src/data/currents20191016';

import {ydayCurrents} from './scripts/fetchCurrentsData';
import {makeNoteList} from './scripts/notesMaker';
import {dropdownBlock} from './scripts/dropdown';

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("app").innerText = "Hello World!";

    document.getElementById("dropdown-container").innerHTML = dropdownBlock;
    
    // console.log(currents20191016);
    console.log(ydayCurrents());
    let firstone = ydayurrents();
    console.log(firstone[0]);
    console.log("Make Note List: ", makeNoteList());
    // window.noteList = makeNoteList;
});