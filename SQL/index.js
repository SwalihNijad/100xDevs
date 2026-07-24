const express = require("express");
const { Pool } = require('pg');
const bcrypt = require("bcrypt");
const z = require("zod");

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_QasvduKy9pf3@ep-raspy-wind-awuf0ip2-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

const app = express();
app.use(express.json())

const signupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6).refine((val) => /[A-Z]/.test(val), "Must contain one uppercase Letter").refine((val) => /[a-z]/.test(val), "Must contain one lowercase Letter").refine((val) => /[0-9]/.test(val), "Must contain number"),
    email: z.email()
})

app.post("/signup", async (req, res) => {
    const { data, success, error } = signupSchema.safeParse(req.body);
    if (!success) {
        res.status(403).json({
            message: "Incorrect inputs", error: JSON.parse(error)
        })
        return;
    }

    const username = data.username;
    const email = data.email;
    const password = data.password;

    const hashedPassword = await bcrypt.hash(password, 10)

    const response = await pool.query(`INSERT INTO users(username, email, password) VALUES ($1, $2, $3)RETURNING id;`, [username, email, hashedPassword])

    res.json({
        message: "Signup done!",
        id: response.rows[0].id
    })
})

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await pool.query(`SELECT * FROM users WHERE email = '$1'`, [email]);

    const userExists = response.rows[0];

    if (!userExists) {
        res.status(403).json({
            message: "incorrect creds"
        })
    } else {
        const correctPassword = await bcrypt.compare(password, userExists.password);

        if (correctPassword) {
            res.json({
                token: "erfyueoihjfjkelchihdsfcivivdc"
            })
        } else {
            res.status(403).json({
                message: "Incorrect creds!"
            })
        }
    }
})

app.listen(3000, function () {
    console.log("Server running on port 3000");
});

(async () => {
    await pool.connect()
})()