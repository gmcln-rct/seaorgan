const express = require('express');

// Gives access to express methods
const app = express();


const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const router = express.Router();


app.use(express.static('public'))

app.get('/', (request, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/', (request, response) => {
    // make api call using fetch
    fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20191014&end_date=20191015&station=8638901&product=water_level&datum=mtl&units=metric&time_zone=gmt&application=web_services&format=json`)
        .then((response) => {
            return response.text();
        }).then((body) => {
            let results = JSON.parse(body)
            console.log(results)   // logs to server
            response.send(results) // sends to frontend
        });
});

create a search route
app.get('/search', (request, response) => {
    fetch(`http://openlibrary.org/search.json?q=${request.query.string}`)
        .then((response) => {
            return response.text();
        }).then((body) => {
            let results = JSON.parse(body)
            console.log(results)
            response.send(results)
        });
});

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`listening on ${PORT}`)
})