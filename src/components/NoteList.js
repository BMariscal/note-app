import React from 'react';
import ListItem from './ListItem';


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
  if(i === 0){
  console.log(i + ' details')
  }else{
  console.log(i + ' details')
  }

  }

  return (
    <ul className="list-group">
    {notes.map((note,i) =>
    <ListItem key={i}
              value={note}
              itemID={i}
              onClick0={(e)=>Edit(i)}
              onClick1={(e)=>Delete(i)}
              onClick2={(e)=>Details(i)}
              />
  )}
    </ul>
  );
}

export default NoteList;