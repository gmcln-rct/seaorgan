import "./styles/index.scss";
import axios from "axios";




window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("app").innerText = "Hello World!";
    axios.get("./").then(res => console.log(res));
});