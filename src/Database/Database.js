const { request, response } = require("express");
//const handlers = require('./handlers.js')
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "deelooc21",
  host: "localhost",
  database: "bookstrain",
  port: "5432",
});

//I will make a bunch of psql queries
//0. lets get user id
const getAll = () => {
  return pool.query("select * from users").then((res) => res.rows);
};

//0.1 lets get user id
const getAllDataFromLibrary = () => {
  return pool.query("select * from library").then((res) => res.rows);
};

//1. Let's get user by email
const getUserByEmail = (email) => {
  //const email = request.body.userEmail;
  return pool
    .query(
      "select (case when exists (select email from users where email =$1) then 1 else 0 end)",
      [email]
    )
    .then((res) => res.rows);
};

//2. Let's get user by password
const checkUsersPassword = (email, password) => {
  return pool
    .query("select password from users where email = $1", [email])
    .then((res) => {
      if (res.rows[0].password === password) {
        return pool
          .query("select * from users where password = $1 and email = $2", [
            password,
            email,
          ])
          .then((res) => res.rows);
      }
      return false;
    });
};
//3. Let's get all news
const getAllNews = () => {
  return pool.query("select * from library_news").then((res) => res.rows);
};

//4 Let's get specific data according to user conditions
const getDataForSearchEngine = (author, genre, country, bookName) => {
  let fullQuery = "select * from library where ";

  if (author) {
    fullQuery += `author LIKE '%${author}%' and `;
  }
  if (genre) {
    fullQuery += `genre LIKE '%${genre}%' and `;
  }
  if (country) {
    fullQuery += `country LIKE '%${country}%' and `;
  }
  if (bookName) {
    fullQuery += `book_name LIKE '%${bookName}%' and `;
  }

  let queryText = fullQuery.substr(0, fullQuery.length - 4);
  return pool.query(`${queryText};`).then((res) => res.rows);
};

//5 let's get particular user's book list
const getSpecificUserBooks = (userId) => {
  return pool.query(
      "select users_books.user_id, users_books.book_id, library.book_name, library.author, users_books.start_date from users_books inner join library on library.book_id=users_books.book_id where user_id = $1",
      [userId]).then((res) => res.rows);
};

module.exports = {
  getAll,
  getAllDataFromLibrary,
  getUserByEmail,
  checkUsersPassword,
  getAllNews,
  getDataForSearchEngine,
  getSpecificUserBooks
};
