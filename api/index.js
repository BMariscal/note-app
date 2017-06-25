import express from 'express';
import bodyParser from 'body-parser';
import data from '../src/testData';

const router = express.Router();
router.use(bodyParser.json());

const notes = data.notes.reduce((obj, note) => {
    obj[note.id] = note;
    return obj;
}, {});


//fetch notes object
router.get('/note',(req,res) =>{
    res.send({

    notes: notes
    });
});


//fetch single note content from api
router.get('/note/:noteId',(req,res) =>{

    let note = notes[req.params.noteId];


  res.send(note);
});





export default router;