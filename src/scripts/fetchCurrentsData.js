export const ydayCurrents = async (stationID = "8638901") => {

    // const fetch = require('node-fetch');
    
    // THIS SCRIPT IS FOR FETCHING FROM FRONTEND

    // Establish Yesterday's Date
    let yesterday = new Date(Date.now() - 864e5);
    let ydyFullYear = yesterday.getFullYear();
    let ydyMonth = yesterday.getMonth() + 1;
    let ydyDate = yesterday.getDate();
    // let ydyDateString = ydyFullYear.toString() + ydyMonth.toString() + ydyDate.toString();

    // ACCOUNT FOR SINGLE  MONTH AND DAY
    let month = (ydyMonth < 10) ? `0${ydyMonth}` : ydyMonth.toString();
    let date = (ydyDate < 10) ? `0${ydyDate}` : ydyDate.toString();

    let ydyDateString = ydyFullYear.toString() + month + date.toString();

    const stats = [];
    // let statCopy = [];

    let data = await getData(ydyDateString, stationID);

    data["data"].forEach(currStats => {
            stats.push([currStats.v, currStats.s])
    })
    
    // return stats;
        
    return (stats);
};


async function getData(ydyDateString, stationID) {
    var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    let optionURL = "https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=${ydyDateString}&end_date=${ydyDateString}&station=${stationID}&product=water_level&datum=mtl&units=metric&time_zone=gmt&application=web_services&format=json"
    let response = await fetch(`https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=${ydyDateString}&end_date=${ydyDateString}&station=${stationID}&product=water_level&datum=mtl&units=metric&time_zone=gmt&application=web_services&format=json`);
    let data = await response.json();
    return data;

};


