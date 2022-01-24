const router = require('express').Router();
const path = require('path');
const createNewNote = require('../../lib/notes')
const { notes } = require('../../data/notes.json')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

  module.exports = router;