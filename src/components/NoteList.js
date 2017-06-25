import React from 'react';
import ListItem from './ListItem';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




function NoteList(props) {
  const notes = props.listedContent.notes;
  console.log(props.listedContent.notes, "inside Notelist")
  function Edit(i){
  if(i === 0){

    console.log(i)
    console.log(notes)
  // notes[i] = name

  }else{
      console.log(notes)
    console.log(i)

  }

  }

  function Delete(i){
  if(i === 0){
  console.log(i + ' delete')
  }else{
  console.log(i + ' delete')
  }

  }

  function Details(i){

  console.log(i + ' details')
  console.log(notes[i].title)


  }

  return (


    <ul className="list-group">


    {Object.keys(notes).map(noteID =>

    <ListItem key={noteID}
              value={notes[noteID]}
              onNoteClick={props.onNoteClick}
              itemID={noteID}
              onClick0={(e)=>Edit(noteID)}
              onClick1={(e)=>Delete(noteID)}
              onClick2={(e)=>Details(noteID)}
              />


  )}
    </ul>


  );
}

export default NoteList;