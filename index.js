
const express = require('express')
const cors = require('cors');
require('dotenv').config();


global.foodData = require('./db')(function call(err, data, CatData) {
  //console.log("Data",data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})
const PORT = process.env.PORT || 7000;
const app = express()
app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `http://localhost:${PORT}`);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}`);
})

