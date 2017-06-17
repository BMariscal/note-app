import React from 'react';
import ListItem from './ListItem';


function NoteList(props) {
  const notes = props.listedContent
  function callme(i){
  if(i === 0){
  console.log(i)
  }else{
  console.log(i)
  }

  }

  return (
    <ul className="list-group">
    {notes.map((note,i) =>
    <ListItem key={i}
              value={note}
              onClick={(e)=>callme(i)}/>
  )}
    </ul>
  );
}

export default NoteList;