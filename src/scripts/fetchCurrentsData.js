export const ydayCurrents = (stationID = "8638901") => {

    const fetch = require('node-fetch');

    // Establish Yesterday's Date
    let yesterday = new Date(Date.now() - 864e5);
    let ydyFullYear = yesterday.getFullYear();
    let ydyMonth = yesterday.getMonth() + 1;
    let ydyDate = yesterday.getDate();
    let ydyDateString = ydyFullYear.toString() + ydyMonth.toString() + ydyDate.toString();

    const list = [];
    const newObj = {};

    fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=${ydyDateString}&end_date=${ydyDateString}&station=${stationID}&product=water_level&datum=mtl&units=metric&time_zone=gmt&application=web_services&format=json`)
        .then(response => response.json())
        
        .then(data => {
            data["data"].forEach(currStats => {
                return list.push(currStats)
            });
        });
    return (list);
};

