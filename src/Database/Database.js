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

module.exports = {
  getAll,
  getUserByEmail,
  checkUsersPassword,
  getAllNews,
};
