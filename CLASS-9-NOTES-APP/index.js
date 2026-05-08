const express = require("express")

const app = express()

let notes = [];

app.get("/notes", function(req, res){
    const note = req.body.note;
    notes.push(note);

    res.json({
        message : "Done!"
    })
})

app.post("/notes",function(req, res){
    res.json({
        notes
    })
})

app.get("/", function(req,res){
    res.sendFile("/c/Users/VICTUS/Desktop/Swalh Nijad/100xDevs/CLASS-9-NOTES-APP/frontend/index.js")
})

app.listen(3000)