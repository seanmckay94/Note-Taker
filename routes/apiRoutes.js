// Dependencies
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');


module.exports = (app) => {
    
    app.get("/api/notes", (req, res) => {
        console.log("Retrieving notes");
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            res.json(notes);
        });
    });

    app.post("/api/notes", (req, res) => {
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;

            let addNote = req.body;
            let updateNotes = json.parse(data);

            updateNotes.push(addNote);

            fs.writeFileSync("db/db.json", json.stringify(updateNotes), "utf8", (err, data) => {
                if (err) throw err;
                console.log("Added new note");
            });
            res.json(updateNotes);
        });
    });
        
    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            
            let updateNotes = json.parse(data);
            let noteIndex = updateNotes.findIndex(
                note.id === req.params.id
            ); if (noteIndex !== req.params.id) {
                return res.status(404).end();
            }

            let deleteNote = updateNotes[noteIndex];
            updateNotes.splice(noteIndex);

            fs.writeFileSync("db/db.json", 
            json.stringify(updateNotes), "utf8", (err, data) => {
                if (err) throw err;
                console.log("Note deleted");
            });

            red.status(200).send(deleteNote);
        });
    });
};