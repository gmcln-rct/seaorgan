const express = require('express');

// Gives access to express methods
const app = express();


const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static('public'))

app.get('/', (request, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

// create route to get single book by its isbn
app.get('/books/:isbn', (request, response) => {
    // make api call using fetch
    fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130101 10:00&end_date=20130101 10:24&station=280-081&product=water_level&datum=mllw&units=metric&time_zone=gmt&application=web_services&format=json`)
        .then((response) => {
            return response.text();
        }).then((body) => {
            let results = JSON.parse(body)
            console.log(results)   // logs to server
            response.send(results) // sends to frontend
        });
});

// create a search route
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