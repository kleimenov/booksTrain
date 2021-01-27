const { request, response } = require('express');
//const handlers = require('./handlers.js')
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'deelooc21',
    host: 'localhost',
    database: 'bookstrain',
    port: '5432'
})
//I will make a bunch of psql queries
//0. lets get user id
const getAll = () => {
  return pool.query('select * from users').then(res => res.rows);
};

module.exports = {
    getAll
}