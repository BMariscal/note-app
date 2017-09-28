import React from 'react';
import Form from './Form';
import Note from './Note';
import * as api from '../api';
import PropTypes from 'prop-types';



const pushState = (obj, url) =>{
  console.log(obj, url, "inside pushState");
  return window.history.pushState(obj, '', url);


}
const onPopState = handler => {
  window.onpopstate = handler;
}

class App extends React.Component {
<<<<<<< HEAD

  static propTypes = {
    initialData: PropTypes.object.isRequired
  }
  state = this.props.initialData;
=======
>>>>>>> 37db715729dde8fc2fc9c0ea9ddeb8c8d8331876
  constructor(props){
    super(props);
    this.state = this.props.initialData;
  }


<<<<<<< HEAD



  componentDidMount(){
    onPopState((event)=>{ if (!event.state){
      location.reload();
    }
    });
  }

=======
>>>>>>> 37db715729dde8fc2fc9c0ea9ddeb8c8d8331876
  fetchNote = (noteId) => {

    console.log(pushState, "pushState")
    pushState(
      {currentNoteId: noteId},
      `/note/${noteId}`
    );
    console.log(pushState, "pushState")

    api.fetchNote(noteId).then(note => {
      console.log(this.props.initialData, "this.props.initialData in api.fetchNote")
      console.log(note, "note inside fetchNote/app.js")
      console.log(note.title, "<<<<note.title inside fetchNote/app.js")
      this.setState({
        pageHeader: note.title,
        currentNoteID: note.id,
        notes: {
          ...this.state.data,
          [note.id]: note
        }

      });
    console.log(this.state.currentNoteID, "cureentNoteID in api.fetchNote")
      console.log(this.state.notes[this.state.currentNoteID].content, "this.state.notes.content in api.fetchNote", window.history.state.currentNoteId
      , "window history")
    });

  };



  fetchNoteList = () => {
    location.reload();

    pushState(
      {currentNoteId: null},
      '/'
    );

    api.fetchNoteList().then(notes => {
      this.setState({
        pageHeader: null,
        currentNoteID: null,
        notes: notes

      });

    });



  };
<<<<<<< HEAD



















  // currentNote() {
  //   return this.state.notes[this.state.currentNoteID];
  // }









  // window.history.go(-2);
  currentContent(){
    console.log(this.state.currentNoteID, 'currentNoteID inside currentContent')
=======
  
  currentNote(){
    console.log(this.state.currentNoteID, 'currentNoteID inside currentNote')
>>>>>>> 37db715729dde8fc2fc9c0ea9ddeb8c8d8331876

    if(this.state.currentNoteID || Object.keys(this.props.initialData).length === 3 ){
      console.log(this.props.initialData.notes, "initial data")
    if (this.state.currentNoteID){
      return <Note
        noteListClick={this.fetchNoteList}
        note={this.state.notes[this.state.currentNoteID].content}/>
    }else{
      return <Note

        noteListClick={this.fetchNoteList}
        note={this.props.initialData.notes[Object.keys(this.props.initialData.notes)[0]].content}/>
    }

    }else{
      console.log(this.state.currentNoteID, 'there')
      console.log(this.props.initialData.notes.content, 'this.props.initialData',Object.keys(this.props.initialData).length,"initialData.length")
      return <Form

        onNoteClick={this.fetchNote}

        data={this.props.initialData}/>

    }


  }





  render() {
    console.log(this.state.currentNoteID, 'here')

    return (
      <div>
        <div>{this.state.pageHeader}

            {this.currentContent()}
         </div>

      </div>

    );
  }
}



export default App;

