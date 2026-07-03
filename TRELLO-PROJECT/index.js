const express = require("express");
const jwt = require(jsonwebtoken);
const { authMiddleware } = require("./middleware");

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
        passsword,
        id: USERS_ID++
    })

    res.json({
        message: "You have signed up successfully"
    })
})

app.post("./signin",(req,res) => {
    const usesrname = req.body.username;
    const password = req.body.passsword;

    const userExists = USERS.find(u => u.username == username && u.passsword)

    if(!userExists){
        req.status(403).json({
            message: "Incorrect credentials"
        })
    }

    const token = jwt.sign({
        userID: userExists.id
    }, "attlasiationsupersecret123123password")
})

//AUTHENTICATED MIDDLEWARE
app.post("/organization",authMiddleware,(req,res) => {
    const userID = req.userID;
    ORGANIZATION.push({
        id: ORGANIZATION_ID++,
        title: req.body.title,
        description:req.body.description,
        admin: userID, 
        members: []
    })
})

app.post("/add-member-to-organization", authMiddleware, (req, res) => {
    const userID = req.userID;
    const organizationID = req.body.organizationID;
    const memerUserUsername = req.body.memerUserUsername;

    const organization = ORGANIZATION.find(org => org.id === organizationID);
    
     if (!organization || organization.admin !== userId) {
        res.status(411).json({
            message: "Either this org doesnt exist or you are not an admin of this org"
        })
        return
    }
})

