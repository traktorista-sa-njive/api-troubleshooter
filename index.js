const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const moment = require('moment');



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware of Handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    res.render('index');
  });


  app.get('/json', (req, res) => {
    res.redirect('/');

    let job_id = 'get_json' + uuidv1();
    let datetime = new Date();
    datetime = moment().format('LLLL');  
  
  
    let newReq = {
      id: job_id,
      type: 'GET-json',
      date: datetime,
      status: 'Created'
    }


  });

  app.get('/xml', (req, res) => {
    res.redirect('/');

  });

  app.post('/json', (req, res) => {
    res.redirect('/');

  });

  app.post('/xml', (req, res) => {
    res.redirect('/');

  });


app.listen(process.env.PORT || 3000);