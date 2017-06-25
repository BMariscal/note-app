import React from 'react';
import Form from './Form';
import Note from './Note';
import * as api from '../api';
// import axios from 'axios';
import PropTypes from 'prop-types';


const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {

  static propTypes = {
    initialData: PropTypes.object.isRequired
  }

    state = this.props.initialData;



  // componentDidMount(){


  //         this.setState({
  //             data: resp.data.notes
  //               });
  //             console.log(resp.data.notes, "NOTES")
  //         })
  //         .catch(console.error)
  // }

  fetchNote = (noteId) => {
    pushState(
      {currentNoteId: noteId},
      `/note/${noteId}`
    );
//...this.state.data,
    api.fetchNote(noteId).then(note => {
      this.setState({
        pageHeader: note.title,
        currentNoteID: note.id,
        // currentNoteData: note.content,
        notes: {
          ...this.state.data,
          [note.id]: note
        }

      });
    console.log(this.state.currentNoteID, "cureentNoteID in api.fetchNote")
    });



  };

  currentNote(){
    console.log(this.state.currentNoteID, 'currentNoteID inside currentNote')

    if(this.state.currentNoteID){


      return <Note note={this.state.notes[this.state.currentNoteID].content}/>
    }else{
      console.log(this.state.currentNoteID, 'there')
      return <Form

        onNoteClick={this.fetchNote}

        data={this.props.initialData}/>

    }


  }





  render() {
    console.log(this.state.currentNoteID, 'here')
    console.log(this.props.initialData, "initial data");
    // console.log(this.state, "STATE")
    // console.log(this.state.data, "This.state.data")
    return (
      <div>
        <div>{this.state.pageHeader}

            {this.currentNote()}
         </div>

      </div>

    );
  }
}



export default App;

