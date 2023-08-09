
const express = require('express')
require('dotenv').config();


global.foodData = require('./db')(function call(err, data, CatData) {
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})
const PORT = process.env.PORT || 7000;
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://flavordrop.netlify.app/');
  res.header('Access-Control-Allow-Origin', 'http://localhost:6019');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json())
app.get('/', (req, res) => {
  res.send('All Good!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}`);
})

