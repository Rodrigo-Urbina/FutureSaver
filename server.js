var express = require('express')
var app = express()

// set the port
var port = process.env.PORT || 1337

app.use(express.static(__dirname + '/public'))

// routes
app.get("/", function (req, res) {
    res.send("Welcome to NodeJS App on Heroku (this is the version 2 (y vala me hace los mandados))!")
})

app.get("/comments", function (req, res) {
    console.log("GET request received at /comments")
})

app.post("/comments", function (req, res) {
    console.log("POST request received at /comments")
})

// app hosting
app.listen(port, function () {
    console.log("app running")
})

/*http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    console.log("app running")
    res.end('Hello World\n')
}).listen(port)*/
