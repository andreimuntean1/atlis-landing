const express = require('express')
const path = require('path')
const app = express()
const port = 50002

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`)
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