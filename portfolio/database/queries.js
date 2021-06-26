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
// const postUserInfo = (fullBody, cb) => {
//   console.log('HAVE WE MADE IT HERE?', fullBody)
//   connection.query('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', fullBody, cb);
// };

// async await method
const postUserInfo = async (user) => {
  try {
    await connection.queryAsync('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', user);
    console.log('query successful');
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getUserInfo,
  postUserInfo
}