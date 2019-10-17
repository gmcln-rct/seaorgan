export const ydayCurrents = (stationID = "8638901") => {

    // const fetch = require('node-fetch');
    
    // THIS SCRIPT IS FOR FETCHING FROM FRONTEND

    // Establish Yesterday's Date
    let yesterday = new Date(Date.now() - 864e5);
    let ydyFullYear = yesterday.getFullYear();
    let ydyMonth = yesterday.getMonth() + 1;
    let ydyDate = yesterday.getDate();
    // let ydyDateString = ydyFullYear.toString() + ydyMonth.toString() + ydyDate.toString();

    // ACCOUNT FOR SINGLE DIDGIT MONTH AND DAY
    let month = (ydyMonth < 10) ? `0${ydyMonth}` : ydyMonth.toString();
    let date = (ydyDate < 10) ? `0${ydyDate}` : ydyDate.toString();

    // minutes = (minutes < 10) ? `0${minutes}` : minutes;

    let ydyDateString = ydyFullYear.toString() + month + date.toString();

    const list = [];
    const newObj = {};

    fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=${ydyDateString}&end_date=${ydyDateString}&station=${stationID}&product=water_level&datum=mtl&units=metric&time_zone=gmt&application=web_services&format=json`)
        .then(response => response.json())
        
        .then(data => {
            data["data"].forEach(currStats => {
                return list.push(currStats)
            });
            // return (list);
        });
    return (list);
};

