const express = require('express')
const app = express()
const port = 3000
const address = "http://127.0.0.1:" + port



app.get('/hello', (req, res) => {
  res.send('Hello ');
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on ${address}`)
})
