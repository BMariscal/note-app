import axios from 'axios';


export const fetchNote = noteId =>{

  return axios.get(`/api/note/${noteId}`).then(resp => resp.data);

};


export const fetchNoteList = () =>{

  return axios.get(`/api/note`)
    .then(resp => resp.data.notes);

};