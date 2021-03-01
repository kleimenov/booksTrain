//setup libraries
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//const bcrypt = require('bcrypt');
const path = require("path");

//const saltRounds = 10;
//const PORT = process.env.PORT || 3002; //set new port (cli) export PORT= <new port value>
const PORT = 3002;
const db = require("../Database/Database.js");
//const handlers = require('./handlers.js');

//set up application
const app = express();

//we will parse data as JSON
app.use(bodyParser.json());

app.use(cors());

//let set ejs as the view enjine
app.set("view engine", "ejs");

//for POST requests we will use urlencoded like: applicaton/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

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
app.use(express.static(path.join(__dirname, "public")));

//------------ Test route --------//
app.get("/", (req, res) => {
  //res.status(200).send('Hello World!');
  db.getAllDataFromLibrary()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
//------------ Rec sys route I--------//
app.get("/alllibrary", (req, res) => {
  //res.status(200).send('Hello World!');
  db.getAllDataFromLibrary()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
//------------ Homepage news route (whatever user logged in or not)--------//
app.get("/news", (req, res) => {
  //res.status(200).send('Hello World!');
  db.getAllNews()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//------------ return book route --------//
app.post("/returnbook", (req, res) => {
  const data = req.body;

  db.removeBook(data.userId, data.bookId).then(() => {
    res.json("Server still love you!");
  });
});

//------------ add book route --------//
app.post("/addbook", (req, res) => {
  const data = req.body;

  db.addBook(req.body.userId, req.body.bookId, req.body.unixTime).then(() => {
    res.json("Server still love you!");
  });
});

//------------ specific user books list route --------//
app.post("/userbooks", (req, res) => {
  const userId = req.body.userId;
  db.getSpecificUserBooks(userId).then((result) => {
    res.json(result);
  });
});

//------------ user's book search route --------//
app.post("/booksSearch", (req, res) => {
  const author = req.body.searchAuthor;
  const genre = req.body.searchGenre;
  const country = req.body.searchCountry;
  const bookName = req.body.searchBookName;
  const data = req.body;

  if (!author && !genre && !country && !bookName) {
    res.json("Server still love you!");
  } else {
    db.getDataForSearchEngine(author, genre, country, bookName).then(
      (result) => {
        res.json(result);
      }
    );
  }
});
//------------ register new user route --------//
app.post("/registrationform", (req, res) => {
  //console.log(req.body.userEmail);

  db.getUserByEmail(req.body.userEmail).then((result) => {
    if (result[0].case) {
      const data = {
        userAdded: false,
        userExist: true,
        message: "User exist!",
      };
      res.json(data);
    } else {
      db.addNewUser(req).then((result) => {
        db.checkUsersPassword(req.body.userEmail, req.body.userPassword).then((result2)=>{
          console.log(result2);
          const data = {
            userAdded: true,
            userExist: false,
            message: "User added!",
            userData: result2
          };
          res.json(data);
        })
      });
    }
  });
});

//------------ login route --------//
app.post("/login", (req, res) => {
  const email = req.body.userEmail;
  const password = req.body.userPass;
  /*
  const data = {
    user: true,
    usetId: 5,
    userEmail: email,
  };
*/
  db.getUserByEmail(email).then((result) => {
    if (!result[0].case) {
      const data = {
        user: false,
        message: "User doesn't exist!",
      };
      res.json(data);
    } else {
      db.checkUsersPassword(email, password).then((result) => {
        if (!result) {
          const data = {
            user: true,
            password: false,
            message: "Wrong password!",
          };
          res.json(data);
        } else {
          const data = {
            user: true,
            userData: result,
            message: "User exist!",
          };
          res.json(data);
        }
      });
    }
  });
});

//------------
//set port and start listen requests
app.listen(PORT, () => {
  console.log(`Server is listeninig ${PORT}........../`);
});
