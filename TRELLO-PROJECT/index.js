const express = require("express");
const jwt = require(jsonwebtoken);
const { authmiddleware } = require("./middleware");

let USERS_ID = 1;
let ORGANIZATION = 1;
let BOARD_ID = 1;
let ISSUE_ID = 1;

const USERS = [];
     
const ORGANIZATIONS = [];

const BOARDS = [];

const ISSUES = [];

const app = express();
app.use(express.json());

//CREATE

app.post("./signup",(req, res) => {
    const username = req.body.username;
    const passswrod = req.body.password;

    const userExists = USERS.find(u => u.username == username && u.password == password)
    if(userExists) {
        res.status(411).json({
            message: "User with this username already exists!"
        })
        return;
    }

    USERS.push({
        username,
        passswrod,
        id: USERS_ID++
    })

    res.json({
        message: "You have signed up successfully"
    })
})

