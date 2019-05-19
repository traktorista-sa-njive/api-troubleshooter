const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  app.get('/test', (req, res) => {
    res.redirect('/');
  });


app.listen(process.env.PORT || 3000);