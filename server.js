import config from './config';
import path from 'path';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import bodyParser from 'body-parser';



import express from 'express';
const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')

}));

server.set('view engine', 'ejs');


import serverRender from './serverRender';
server.get(['/','/note/:noteId' ],(req, res,next) => {

  if(req.params.noteId){
    console.log(req.params.noteId)
  }
    serverRender(req.params.noteId)
    .then( ({initialMarkup, initialData})=> {

      res.render('index',{
        initialMarkup,
        initialData

      });

    })
    .catch(console.error);

    });

// server.get('/task', function(req, res) {
//   res.send('id:' + req.query.id)
// });

// server.post('/', function(req, res) {
//   res.send('update');
// });

//
server.use('/api', apiRouter);
server.use(express.static('public'));

// * : Use this route for any GET request not already handled
server.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});
//
// // handling 404 errors
// server.use(function(err, req, res, next) {
//   if(err.status !== 404) {
//     console.log(err)
//     return next();
//   }
//
//   res.send(err.message || '** nothing here, wyd? **');
// });

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
