import React from 'react';
import ListItem from './ListItem';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




function NoteList(props) {
  const notes = props.listedContent
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

    {notes.map((note,i) =>

    <ListItem key={note.id}
              value={[note.title]}
              onNoteClick={props.onNoteClick}
              itemID={note.id}
              onClick0={(e)=>Edit(i)}
              onClick1={(e)=>Delete(i)}
              onClick2={(e)=>Details(i)}
              />


  )}
    </ul>


  );
}

export default NoteList;