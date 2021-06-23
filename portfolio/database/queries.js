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

module.exports = {
  getUserInfo,
  postUserInfo
}