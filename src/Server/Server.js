//setup libraries
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const path = require('path')


const saltRounds = 10;
//const PORT = process.env.PORT || 3002; //set new port (cli) export PORT= <new port value>
const PORT = 3002;
const db = require('../Database/Database.js');
//const handlers = require('./handlers.js');

//set up application
const app = express();

//we will parse data as JSON
app.use(bodyParser.json());

//let set ejs as the view enjine
app.set('view engine', 'ejs');

//for POST requests we will use urlencoded like: applicaton/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//add cookie parser
app.use(cookieParser());

//add json parser
const jsonParser = express.json();

//absolute path of the directory
app.use(express.static(path.join(__dirname, 'public')))
//------------


//------------
//set port and start listen requests 
app.listen(PORT, () => {
    console.log(`Server is listeninig ${PORT}........../`)
  });