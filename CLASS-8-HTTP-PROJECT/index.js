//http server that supports 4 routes (/sum, /sub, /multi, /div)

const express = require("express");
const app = express();

app.use(express.json());

//http://localhost:3000/sum?a=10&b=20

app.get("/" ,function(req,res){
    res.sendFile("/Users/VICTUS/Desktop/Swalh Nijad/100xDevs/CLASS-8-HTTP-PROJECT/index.html")
})

app.get("/sum" ,function(req,res){
    const a = parseInt(req.query.a); //string 1 parseint will convert to integer
    const b = parseInt(req.query.b); //string 2

    const sum = a + b ;

    res.json({
        ans : sum 
    })

    // res.send(sum.toString)  in the normal data form
})

//if http://localhost:3000/sum/a/b

// app.get("/sum/:a/:b" ,function(req,res){
//     const a = parseInt(req.params.a); //string 1 parseint will convert to integer
//     const b = parseInt(req.params.b); //string 2
//  ....same as above....

//for post request
// app.post("/multiply", function(req, res) {
//     const a = parseInt(req.body.a); // string 1
//     const b = parseInt(req.body.b); // string 2

//     const ans = a * b;

//     res.json({
//         ans: ans
//     })  
// })  
app.listen(3003)