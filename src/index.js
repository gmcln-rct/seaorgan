import "./styles/index.scss";
import axios from "axios";
import currents20191016 from '../src/data/currents20191016';



let dataObj = currents20191016;

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("app").innerText = "Hello World!";
    // axios.get("./").then(res => console.log(res));
    console.log(dataObj);
});