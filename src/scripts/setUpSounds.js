
export const setUpSounds = (tideObj) => {
    let notesList = []

    // All available notes
    let allNotes = ["A1", "A2", "A3", "A4", "b1", "b2", "b3", "b4", "b5", "C2", "C3", "C4", "C5", "D2", "D3", "D4", "E2", "E3", "E4", "F2", "F3", "F4", "G2", "G3", "G4"];
    let allNotesLength = allNotes.length;

    let noteRef, noteRefNum, noteIdx, newNote;

    for (let i = 0; i < allNotesLength; i++) {
        // Establish location of note in array
        noteRef = tideObj[i][0] || "0.1";
        noteRefNum = parseFloat(noteRef);
        // Create a number between 0 and 1, then multiply by length of notes array
        noteIdx = Math.floor(((noteRefNum + 1) / 2) * allNotesLength);
        newNote = newNote > 5 ? allNotes[noteIdx - 5] : allNotes[noteIdx];
        notesList.push(newNote);
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
};

