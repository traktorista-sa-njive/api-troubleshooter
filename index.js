const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');



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


  app.get('/test', (req, res) => {
    res.redirect('/');
  });


app.listen(process.env.PORT || 3000);