import "./styles/index.scss";
import axios from "axios";
// import currents20191016 from '../src/data/currents20191016';

import {ydayCurrents} from './scripts/fetchCurrentsData';

    // const newCurr = ydayCurrents ? Object.values(data).map(data => data.id) : {};



window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("app").innerText = "Hello World!";
    // axios.get("./").then(res => console.log(res));
    // window.currents = currents20191016;
    window.ydayCurrents = ydayCurrents;
    
    // console.log(currents20191016);
    // console.log(ydayCurrents());
});