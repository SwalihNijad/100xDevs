const express = require("express")
const jwt = require("jsonwebtoken")
const { authMiddleware } = require("./authMiddleware")

const app = express();
app.use(express.json());

let notes = [];
let users = [{
    username : "Harkirat",
    password : "123123"
}]

app.post("/signup", function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    if(userExists){
        res.status(404).json({
            message: "User with this username already exists"
        })
    }

    users.push({
        username = username,
        password = password
    })

    res.json({
        message : "You have signed up"
    })
})

app.post("/signin", function(req,res) {
    const username = req.body.username;
    const password = req.body.username;

    const userExists = username.find(user => user.username === username && user.password === password);

    if(!userExists){
        res.status(404).json({
            message: "Incorrect credentials"
        })
        return;
    }

    // json web tokens
    const token = jwt.sign({
        username: username
    }, "Harkirat123")

    res.json({
        token : token
    })
})

//POST - Create a note -- AUTHENTICATED ENDPOINT
app.post("/notes", authMiddleware , function(req, res){

    const username = req.username;
    const note = req.body.note;
    notes.push(note, username);

    res.json({
        message : "Done!"
    })
})

//GET - Get all my notes -- AUTHENTICATED ENDPOINT
app.get("/notes", authMiddleware ,function(req, res){
    const username = req.username
    const userNotes = notes.filter(note => note.username == username);

    res.json({
        notes
    })
})

app.get("/", function(req,res){
    res.sendFile("/Users/VICTUS/Desktop/Swalh Nijad/100xDevs/CLASS-9-NOTES-APP/frontend/index.html")
})

app.get("/signup", function(req,res){
    res.sendFile("/Users/VICTUS/Desktop/Swalh Nijad/100xDevs/CLASS-9-NOTES-APP/frontend/signup.html")
})

app.get("/signin", function(req,res){
    res.sendFile("/Users/VICTUS/Desktop/Swalh Nijad/100xDevs/CLASS-9-NOTES-APP/frontend/signin.html")
})

app.listen(3000 , function() {
    console.log("Server running on port 3000");
    
})