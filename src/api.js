import axios from 'axios';


export const fetchNote = noteId =>{

  return axios.get(`/api/note/${noteId}`).then(resp => resp.data);

};