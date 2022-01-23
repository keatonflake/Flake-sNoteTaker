const router = require('express').Router();
const { notes } = require('../../data/notes.json');

// grabs all notes
router.get('/notes', (req, res) => {
    let results = notes;
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
});

module.exports  = router;

