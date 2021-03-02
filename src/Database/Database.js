const { request, response, query } = require("express");
const handlers = require("../Server/Serverhandlers");
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
//select library.book_id, library.book_name, library.author, library.genre, users_books.user_id from library left outer join users_books on book_id=book_id where
//select * from library where
const getDataForSearchEngine = (author, genre, country, bookName) => {
  let fullQuery =
    "select library.book_id, library.book_name, library.author, library.genre, users_books.user_id from library left outer join users_books on library.book_id=users_books.book_id where ";

  if (author) {
    fullQuery += `library.author LIKE '%${author}%' and `;
  }
  if (genre) {
    fullQuery += `library.genre LIKE '%${genre}%' and `;
  }
  if (country) {
    fullQuery += `library.country LIKE '%${country}%' and `;
  }
  if (bookName) {
    fullQuery += `library.book_name LIKE '%${bookName}%' and `;
  }

  let queryText = fullQuery.substr(0, fullQuery.length - 4);

  return pool.query(`${queryText}`).then((res) => res.rows);
};

//5 let's get particular user's book list
const getSpecificUserBooks = (userId) => {
  return pool
    .query(
      "select users_books.user_id, users_books.book_id, library.book_name, library.author, library.description, users_books.start_date from users_books inner join library on library.book_id=users_books.book_id where user_id = $1",
      [userId]
    )
    .then((res) => res.rows);
};

//6 let's add new book to user reading list
const addBook = (userId, bookId, unixTime) => {
  return pool
    .query(
      "insert into users_books (user_id, book_id, start_date) values ($1, $2,$3)",
      [userId, bookId, unixTime]
    )
    .then((res) => res.rows);
};

//7. Let's add book to user's wish list
const addWishList = (req) => {
  const { userId, bookId, unixTime } = req.body;
  return pool
    .query(
      "insert into users_wish_list (user_id, book_id, add_date) values ($1, $2, $3)",
      [userId, bookId, unixTime]
    )
    .then((res) => res.rows);
};

//8. let's delete book from users_books table
const removeBook = (userId, bookId) => {
  return pool
    .query("delete from users_books where user_id=$1 and book_id=$2", [
      userId,
      bookId,
    ])
    .then((res) => res.rows);
};

//9. Add new user
const addNewUser = (req) => {
  const {
    firstName,
    secondName,
    phoneNumber,
    userEmail,
    userPassword,
  } = req.body;
  const userId = handlers.randomUserIdGen();

  return pool
    .query(
      "INSERT INTO users (id, first_name, last_name, email, password, phone_number) VALUES ($1, $2, $3, $4, $5, $6)",
      [userId, firstName, secondName, userEmail, userPassword, phoneNumber]
    )
    .then((res) => res.rows);
};

module.exports = {
  getAll,
  getAllDataFromLibrary,
  getUserByEmail,
  checkUsersPassword,
  getAllNews,
  getDataForSearchEngine,
  getSpecificUserBooks,
  addBook,
  removeBook,
  addNewUser,
  addWishList,
};
