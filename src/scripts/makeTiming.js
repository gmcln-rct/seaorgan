const allTiming, allTimingLength;

export const makeTiming = (tideObj) => {

    allTiming = ['+0:2', '+1:2', '+5.0', '+6:0', '+11:2', '+11:2:2', '12:0:2', '+15:0', '+19:3:0', '+19:4:2', '+23:2'];
    allTimingLength = allTiming.length;

    for (let i = 0; i < allNotesLength; i++) {
        // Establish location of note in array
        noteRef = tideObj[i][0] || "0.1";
        noteRefNum = parseFloat(noteRef);

        // Create a number between 0 and 1, then multiply by length of notes array
        noteIdx = Math.floor(((noteRefNum + 1) / 2) * allNotesLength);
        newNote = newNote > 10 ? allNotes[noteIdx - 10] : allNotes[noteIdx];
        notesList.push(newNote);
        if (i === 1 && newNote > 5) {
            notesList.push(allNotes[noteIdx - 5]);
        }
        // if (i % 5 === 0) {
        //     notesList.push([null]);
        // }
        if (i % 4 === 0) {
            notesList.push("C4");
        }
        if (i % 10 === 0) {
            notesList.push("G4");
        }

        if (i % 15 === 0) {
            notesList.push("G3");
        }
    }

    // noteList = allNotes;
    return notesList;
    function makeTiming() {
        let timeIndex;
        let indivTiming;
        timeIndex = Math.random(timing.length);
        indivTiming = timing[timeIndex];
        return indivTiming;
    }
}