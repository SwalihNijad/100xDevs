//Middleware

const express = require("express")
const app = express()
let requestCount = 0;

function middleware(req, res,next){
    requestCount++;
    console.log("HI there")
    next();
}

app.use(express.json)

app.get("/sum", middleware, function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b ;

    res.json({
        ans : sum
    })
})

app.get("/status",middleware, function(req, res){
    res.send("up")
})

app.get("/requestCount",function(req,res){
    res.send({
        requestCount
    })
})

app.listen(3002)