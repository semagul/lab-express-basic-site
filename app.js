const express = require("express")
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/homepage.html")
})

app.get("/about", function (req, res) {
    res.send(`<h1>This is "about" page</h1>` + `Puki is grumpy looking but sweet.`)
})

app.get("/photos", function (req, res)  {
    res.sendFile(__dirname + "/views/photos.html")
})

app.listen(port, function () {
	console.log(`Server listening on port ${port}`)
})