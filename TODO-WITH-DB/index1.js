const express = require("express");
const jwt = ("jsonwebtoken")
const { UserModel, TodoModel } = require("./db")
const { auth, JWT_SECRET } = require("./auth")
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        email: email,
        username: username,
        password: password
    })

    res.json({
        message: "Signed up successfully!"
    })
});

app.post("/signin",(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        username: username,
        password: password
    })

    if(response){
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET)

        res.json({
            token
        })
    }
    else{
        res.json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", auth, async (req,res) {
    const userID = req.body.userID;
    const title = req.body.title;
    const done = req.body.done

    await TodoModel.create({
            userID,
            title,
            done
    });

    res.json({
        message: "Todo created"
    })
});

app.get("/todos", auth, async(req,res) {
    const userID = req.userID;

    const todos = await TodoModel.find({
        userID
    })

    res.json({
        todos
    })
});

app.listen(3000)