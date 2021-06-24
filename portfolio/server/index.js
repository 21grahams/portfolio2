const express = require('express');
const app = express();
const cors = require("cors");
const db = require("../database/queries.js");
const port = 3001;
const path = require('path');

//=====================
//     Middleware
//=====================
app.use(express.json()); // => req.body
app.use(cors());
app.use(express.static('build'));
app.use(express.static(path.join(__dirname, 'build')));


//=====================
/////// Routes ////////
//=====================

// get request //
app.get('/messages', (req, res) => {
  let str = 'SELECT * from messages';
  console.log('have we made it here? SERVER')
  db.getUserInfo(str, (err, results) => {
    if (err) {
      console.log('ERROR WITH GET REQUEST: ', err);
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  });
});

//==========post user============

// callback method
app.post("/messages", (req, res) => {
  console.log("req.body: ", req.body);
  let fullBody = [req.body.name, req.body.email, req.body.message];
  db.postUserInfo(fullBody, (err, results) => {
    if (err) {
      console.log("ERROR WITH POST REQUEST: ", err);
      res.status(404).send("FAILED");
    } else {
      res.status(201).send("POSTED!");
    }
  });
});

// async await method
// app.post('/messages', async(req, res) => {
//   const { name, email, message } = req.body;
//   console.log('req.body: ', req.body);
//   try {
//     const response = await db.postUserInfo({name, email, message});
//     console.log('successful post: ', response);
//   } catch (err) {
//     console.log('error in the post request on server: ', err);
//   }
// })

//=================================
/////// Spin Up The Server ////////
//=================================
app.listen(port, () => {
  console.log(`Graham's Portfolio App listening at http://localhost:${port}` || 8080)
})