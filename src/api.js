import axios from 'axios';


export const fetchNote = noteId =>{
  console.log(noteId)
  return axios.get(`/api/notes/${noteId}`).then(resp => resp.data);

};