const express = require('express');

const PORT = process.env.port || 3001;
const app = express();

const { notes } = require('./data/notes.json');

// grabs all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });