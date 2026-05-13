const express = require("express")

const app = express()

app.use(express.json())

let notes = [];

//POST - Create a note
app.post("/notes", function(req, res){
    const note = req.body.note;
    notes.push(note);

    res.json({
        message : "Done!"
    })
})

//GET - Get all my notes
app.get("/notes",function(req, res){
    res.json({
        notes
    })
})

app.get("/", function(req,res){
    res.sendFile("/Users/VICTUS/Desktop/Swalh Nijad/100xDevs/CLASS-9-NOTES-APP/frontend/index.html")
})

app.listen(3000 , function() {
    console.log("Server running on port 3000");
    
})