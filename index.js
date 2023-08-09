
const express = require('express');
const cors = require('cors');
require('dotenv').config();

global.foodData = require('./db')(function call(err, data, CatData) {
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
});

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  optionsSuccessStatus: 204 // Set the status for successful OPTIONS requests
}));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello!')
});

app.use('/api/auth', require('./Routes/Auth'));

app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}`);
});

