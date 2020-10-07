const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/finderdb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
},
() => console.log('Connected to the DB')
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', require('./route/router'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})