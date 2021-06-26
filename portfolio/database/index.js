const mysql = require('mysql2');
const Promise = require('bluebird'); // added bluebird

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'portfolio'
});

connection.connect((err) => {
  if (err) {
    console.log('ERROR WITH DATABASE: ', err);
  } else {
    console.log('Connected to MySQL!')
  }
});

Promise.promisifyAll(connection); // promisifyAll

module.exports = connection;