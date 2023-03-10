require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const FoodRoutes = require('./routes/food');

const PORT = process.env.PORT;
const MONGOOSE = process.env.MANGO_DB;

//express app

const app = express();

//Middle ware
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send({ mass: 'hello world!' });
});
app.get('/api/v2', (req, res) => {
  res.send({ mass: 'hello world !!!' });
});

app.listen(port, () => {
  console.log(`azampayapp listening at http://localhost:${port}`);
});

// app.use('/api/food', FoodRoutes);

// //Connect to db
// const connect = mongoose
//   .connect(MONGOOSE)
//   .then(() => {
//     // Listening to request
//     app.listen(PORT, () => {
//       console.log(`listening to port 🈂️ ${PORT} and connect to db 🏀`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// if (connect) {
// }
