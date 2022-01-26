const fs = require('fs')
const router = require('express').Router();
const id = require('uuid');
const { notes } = require('../../data/notes.json');

// grabs all notes
router.get('/notes', (req, res) => {
    
  fs.readFile('./data/notes.json', "utf8", (err, data) => {
    const fixedData = JSON.parse(data);  
    res.json(fixedData)
    });
});

router.post('/notes', (req, res) => {
    // const note = createNewNote(req.body, notes);
    const note = req.body;
    note.id = id.v4();
    //save the note
    fs.readFile('./data/notes.json','utf8', function(err, data){

    const readData = JSON.parse(data);
  
    readData.notes.push(note);
//write file
    fs.writeFile('./data/notes.json', JSON.stringify(readData), err => {
        if (err) {
            console.log(err)
        }
        res.send(200)
    });
});
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

// router.delete('/note', (req, res) => {
//     res.send("deleted")
//     console.log("yaaa boi");
// })

module.exports  = router;

