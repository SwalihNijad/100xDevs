const express = require("express");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");
const { organizationModel, userModel } = require("./models")

let BOARD_ID = 1;
let ISSUE_ID = 1;


const BOARDS = [];

const ISSUES = [];

const app = express();
app.use(express.json());

//CREATE

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // const userExists = USERS.find(u => u.username == username)
    const userExists = await userModel.findOne({
        username: username
    })

    if (userExists) {
        res.status(411).json({
            message: "User with this username already exists!"
        })
        return;
    }

    const newUser = await userModel.create({
        username: username,
        password: password
    })

    res.json({
        id: newUser._id,
        message: "You have signed up successfully"
    })
})

app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = await userModel.findOne({
        username: username,
        password: password
    })

    if (!userExists) {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    } else {
        const token = jwt.sign({
            userId: userExists.id
        }, "Nijad123")

        res.json({
            token
        })
    }


})

//AUTHENTICATED MIDDLEWARE
app.post("/organization", authMiddleware, async (req, res) => {
    const userId = req.userId;

    const newOrg = await organizationModel.create({
        title: req.body.title,
        description: req.body.description,
        admin: userId,
        members: []
    })

    res.json({
        message: "Organization created successfully!",
        id: newOrg._id
    })
})

app.post("/add-member-to-organization", authMiddleware, async(req, res) => {
    const userId = req.userId;
    const organizationId = req.body.organizationId;
    const memberUsername = req.body.memberUsername;

    // const organization = ORGANIZATIONS.find(org => org.id === organizationID);
    const organization = await organizationModel.findOne({
        _id: organizationId
    })

    if (!organization || organization.admin.toString() !== userId) {
        res.status(411).json({
            message: "Either this org doesnt exist or you are not an admin of this org"
        })
        return
    }   

    // const memberuser = USERS.find(u => u.username == memberUserUsername)
    const memberuser = await userModel.findOne({
        username: memberUsername
    })

    if (!memberuser) {
        res.status(411).json({
            message: "No user with this username exists in our db"
        })
        return
    }

    // await organization.updateOne({
    //     _id: organizationId
    // }, {
    //     $push: {
    //         "members": memberuser._id
    //     }
    // })
    organization.members.push(memberuser._id)
    await organization.save()

    res.json({
        message: "New member added!"
    })
})

app.post("/board", (req, res) => {

})

app.post("/issue", (req, res) => {

})

//GET ENDPOINTS 
app.get("/organization", authMiddleware, async(req, res) => {
    const userId = req.userId;
    const organizationId = (req.query.organizationId); 

    const organization = await organizationModel.findOne({
        id: organizationId
    }); 


    if (!organization || organization.admin.toString() !== userId) {
        res.status(411).json({
            message: "Either this org doesnt exist or you are not an admin of this org"
        })
        return
    }

    const members = await userModel.find({
        _id: organization.members
    })

    res.json({
        organization: {
            title: organization.title,
            description: organization.description,
            members: members.map(m => ({
                username: m.username,
                id: m._id
            }))
        }
    })
})

app.get("/boards", (req, res) => {


})

app.get("/issues", (req, res) => {

})

app.get("/members", (req, res) => {

})

// UPDATE
app.put("/issues", (req, res) => {

})

//DELETE -- FIND THE BUG and fix it
app.delete("/members", authMiddleware, async(req, res) => {
    const userId = req.userId;
    const organizationId = req.body.organizationId;
    const memberUsername = req.body.memberUsername;

    const organization = await organizationModel.findOne({
        _id: organizationId
    })

    if (!organization || organization.admin.toString() !== userId) {
        res.status(411).json({
            message: "Either this org doesnt exist or you are not an admin of this org"
        })
        return
    }

    const memberuser = await userModel.findOne({
        username: memberUsername
    })

    if (!memberuser) {
        res.status(411).json({
            message: "No user with this username exists in our db"
        })
        return
    }
    
    // await organizationModel.updateOne({
    //     _id: organizationID
    // },{
    //     "$pullall": {
    //         members: memberuser._id
    //     }
    // })

    console.log("Before members")
    console.log(organization.members);

    organization.members = organization.members.filter(x => x.toString() !== memberuser._id.toString())
    await organization.save( )

    console.log("After members")
    console.log(organization.members);

    res.json({
        message: "Member deleted!"
    })
})

app.listen(3000, function() {
    console.log("Server Running on port 3000")
});
