import { ydayCurrents } from './fetchCurrentsData';


export const makeNoteList = () => {
    let currObj = ydayCurrents();
    let noteList = [];


    // for (let i=0; 0 < currObj.length; i++) {
    //     noteList.push(currObj[i])
    // }

    // noteList.concat(currObj[0]);
    // noteList.concat(currObj["1"]);

    noteList = Object.keys(currObj);

    return noteList;
};

