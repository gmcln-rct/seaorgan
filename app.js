const express = require('express');


// NOTE APP.JS CURRENT NOTE BEING UTILIZED

// Gives access to express methods
const app = express();
const cors = require('cors');

const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const router = express.Router();

app.use(cors());
app.use(express.static('public'))


// Establish Yesterday's Date
let yesterday = new Date(Date.now() - 864e5);
let ydyFullYear = yesterday.getFullYear();
let ydyMonth = yesterday.getMonth() + 1;
let ydyDate = yesterday.getDate();

month = (ydyMonth < 10) ? `0${ydyMonth}` : ydyMonth.toString;
minutes = (minutes < 10) ? `0${minutes}` : minutes;

let ydyDateString = ydyFullYear.toString() + ydyMonth.toString() + ydyDate.toString();

// let ydyDateString = ydyFullYear.toString() + ydyMonth.toString() + ydyDate.toString();
const list = [];

// Backend data fetch
app.get('/gov', (request, response) => {
    // make api call using fetch
    fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=${ydyDateString}&end_date=${ydyDateString}&station=${stationID}&product=water_level&datum=mtl&units=metric&time_zone=gmt&application=web_services&format=json`)
        .then((response) => {
            return response.text();
        }).then((body) => {
            let results = JSON.parse(body)
            console.log(results)   // logs to server
            response.send(results) // sends to frontend
        });
});


app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`)
})