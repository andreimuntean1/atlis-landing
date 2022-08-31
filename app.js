const express = require('express')
const path = require('path')
const app = express()

app.listen(4000, () => {
  console.log('Server is running 🚀')
})

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/index.html'))
})

app.get('/careers', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/careers.html'))
})

// app.get('/adblock', (req, res) => {
//   res.sendFile(path.join(__dirname, '/pages/adblock.html'))
// })