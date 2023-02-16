const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("We are learning express")
})

app.get("/login", (req, res) => {
    res.send("Sigin Page")
})

app.post("/postReq/:id", (req, res) => {
    console.log("our id is " + req.params.id)
    let { name, pos, age } = req.body
    res.send(age + "")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})