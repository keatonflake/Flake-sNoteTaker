const fs = require('fs');
const path = require('path');

function createNewNote(body, noteData) {
    const note = body;
    noteData.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../data/notes.json'),
      JSON.stringify({ noteData }, null, 2)
    );
    return note;
  }

  module.exports = createNewNote;