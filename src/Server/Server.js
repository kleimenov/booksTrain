//setup libraries
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
//const bcrypt = require('bcrypt');
const path = require('path')


//const saltRounds = 10;
//const PORT = process.env.PORT || 3002; //set new port (cli) export PORT= <new port value>
const PORT = 3002;
const db = require('../Database/Database.js');
//const handlers = require('./handlers.js');

//set up application
const app = express();

//we will parse data as JSON
app.use(bodyParser.json());

app.use(cors())

//let set ejs as the view enjine
app.set('view engine', 'ejs');

//for POST requests we will use urlencoded like: applicaton/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//add cookie parser
app.use(cookieParser());

//add json parser
const jsonParser = express.json();

//------------
/*
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});
*/
//absolute path of the directory
app.use(express.static(path.join(__dirname, 'public')))


//------------ Test route --------//
app.get('/', (req, res) => {
    //res.status(200).send('Hello World!');
    db.getAll().then(result => {
        res.status(200).send(result);
      })
      .catch(error => {
        res.status(500).send(error);
      })
  })


  //------------ Test route --------//
app.post('/login', (req, res) => {
  console.log(req.body)
})



//------------
//set port and start listen requests 
app.listen(PORT, () => {
    console.log(`Server is listeninig ${PORT}........../`)
  });