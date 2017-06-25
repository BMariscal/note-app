//fetch data from the api here
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

import config from './config';
import axios from 'axios';



// {
//   [apiData.id] : apiData
//
// }


const getApiUrl = noteId => {

    if (noteId){
      return `${config.serverUrl}/api/note/${noteId}`;
    }
    return `${config.serverUrl}/api/note`;

};

// [apiData.id]: apiData

const getInitialData = (noteId, apiData) =>{



  if (noteId){
    console.log(noteId, 'noteid in getInitialData/serverRender')
    console.log(apiData.id, 'apiData.id in getInitialData/serverRender')
    return {
      pageHeader: apiData.title,
      currentNoteId: apiData.id,
      notes: {[apiData.id]: apiData}
    };
  }

  return {
    notes: apiData.notes
  };

};




//<App initialnotes={initialData.notes}/>),




const serverRender = (noteId) =>
    axios.get(getApiUrl(noteId))
        .then(resp => {

            const initialData = getInitialData(noteId, resp.data)
          console.log(initialData, "initialData inside serverRender()")
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialData={initialData}/>),
                initialData
            };
        });


export default serverRender;