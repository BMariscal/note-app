//fetch data from the api here
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

import config from './config';
import axios from 'axios';


const serverRender = () =>
    axios.get(`${config.serverUrl}/api/notes`)
        .then(resp => {

            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialnotes={resp.data.notes}/>),
                initialData: resp.data
            };
        });


export default serverRender;