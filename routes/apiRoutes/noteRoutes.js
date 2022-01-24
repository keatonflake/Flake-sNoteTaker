const fs = require('fs')
const router = require('express').Router();
const id = require('uuid');
const { notes } = require('../../data/notes.json');

// grabs all notes
router.get('/notes', (req, res) => {
    let results = notes
    
    res.json(results);
    console.log();
});

router.post('/notes', (req, res) => {
    // const note = createNewNote(req.body, notes);
    const note = req.body;
    note.id = id.v4();
    //save the note
    fs.readFile('./data/notes.json','utf8', function(err, data){

    const readData = JSON.parse(data);
  
    readData.notes.push(note);

    fs.writeFile('./data/notes.json', JSON.stringify(readData), err => {
        if (err) {
            console.log(err)
        }
        res.send(200)
//write file
    });
});
});

module.exports  = router;

