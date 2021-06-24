const connection = require('./index.js')

const getUserInfo = (user, cb) => {
  console.log('have we made it here? DATABASE');
  connection.query('SELECT * FROM messages', (err, results) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  });
};

// callback method
const postUserInfo = (user, cb) => {
  console.log('HAVE WE MADE IT HERE?', user)
  connection.query('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', user, (err, results) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, results)
    }
  });
};

// async await method
// const postUserInfo = async (user) => {
//   try {
//     console.log('DATABASE RECEIVED! ', user);
//     const query = await connection.query('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', user);
//   } catch (err) {
//     console.log(err)
//   }
// }

module.exports = {
  getUserInfo,
  postUserInfo
}