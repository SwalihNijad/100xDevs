const express = require("express")
const { Pool } = require('pg')

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_QasvduKy9pf3@ep-raspy-wind-awuf0ip2-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

const app = express();
app.use(express.json())

app.post("/signup", async(req,res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const response = await pool.query(`INSERT INTO users(username, email, password) VALUES ($1, $2, $3)RETURNING id;`,[username, email, password])
    
    res.json({
        message: "Signup done!"
        //id: response.rows[0].id
    })
})

app.post("/signin", async(req, res) => {
    const username = req.body.username
    const email = req.body.email

    const response = await pool.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`);

    const userExists = response.rows[0];

    if(!userExists) {
        res.status(403).json({
            message: "incorrect creds"
        })
    } else {
        res.jsonp({
            token: "erfyueoihjfjkelchihdsfcivivdc"
        })
    }
})

app.listen(3000, function() {
    console.log("Server running on port 3000");
});