const express = require('express')
const app = express()

app.use(express.static(('public')))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/Home.html')
})

app.get('/About', function (req, res) {
    res.sendFile(__dirname + '/views/About.html')
})

app.get('/Works', function (req, res) {
    res.sendFile(__dirname + '/views/Works.html')
})

app.get('/PhotoGallery', function (req, res) {
    res.sendFile(__dirname + '/views/PhotoGallery.html')
})

app.listen(3000)