const express = require("express");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");
const { organizationModel, userModel, boardModel, issueModel } = require("./models")



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
app.post("/organizations", authMiddleware, async (req, res) => {
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

app.post("/add-member-to-organization", authMiddleware, async (req, res) => {
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

app.post("/boards", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const organizationId = req.body.organizationId;

    const organization = await organizationModel.findById(organizationId)
    if (!organization) {
        res.status(404).json({
            message: "The Organization does'nt exist!"
        })
        return;
    }

    const isMember = organization.members.some(
        m => m.toString() === userId
    );

    if (!isMember && organization.admin.toString() !== userId) {
        res.status(403).json({
            message: "You are not the member of the organization!"
        })
        return;
    }

    const newBoard = await boardModel.create({
        title: req.body.title,
        description: req.body.description,
        organizationId: organizationId,
        createdBy: userId
    })

    res.json({
        message: "Board created Successfully",
        id: newBoard._id
    })
})

app.post("/issues", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const boardId = req.body.boardId;

    const board = await boardModel.findById(boardId);
    if (!board) {
        res.status(403).json({
            message: "Board doesn't exists!"
        })
        return;
    }

    const organization = await organizationModel.findById(board.organizationId)
    if (!organization) {
        res.status(404).json({
            message: "The Organization does'nt exist!"
        })
        return;
    }

    const isMember = organization.members.some(
        m => m.toString() === userId
    );

    if (!isMember && organization.admin.toString() !== userId) {
        res.status(403).json({
            message: "You are not the member of the organization!"
        })
        return;
    }

    const newIssue = await issueModel.create({
        title: req.body.title,
        description: req.body.description,
        boardId: boardId,
        createdBy: userId
    })

    res.json({
        message: "Issue has been noticed!",
        id: newIssue._id
    })
})



//GET ENDPOINTS 
app.get("/organizations", authMiddleware, async (req, res) => {
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

app.get("/boards", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const organizationId = (req.query.organizationId);

    const organization = await organizationModel.findById(organizationId);

    if (!organization) {
        res.status(404).json({
            message: "organization does not exist!"
        })
        return;
    }


    const isMember = organization.members.some(
        m => m.toString() === userId
    );

    if (!isMember && organization.admin.toString() !== userId) {
        res.status(403).json({
            message: "You are not the member of the organization!"
        })
        return;
    }

    const boards = await boardModel.find({
        organizationId,
    })

    res.json({
        boards
    });
})

app.get("/issues", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const boardId = (req.query.boardId);

    const board = await boardModel.findById(boardId);

    if (!board) {
        res.status(404).json({
            message: "Board not found!"
        })
        return;
    }

    const organization = await organizationModel.findById(board.organizationId);

    if (!organization) {
        res.status(404).json({
            message: "Organization does'nt Exists"
        })
        return
    }

    const isMember = organization.members.some(
        m => m.toString() === userId
    );

    if (!isMember && organization.admin.toString() !== userId) {
        res.status(403).json({
            message: "You are not the member of the organization!"
        })
        return;
    }

    const issues = await issueModel.find({
        boardId,
    })

    res.json({
        issues
    })
})

app.get("/members", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const organizationId = (req.query.organizationId)

    const organization = await organizationModel.findById(organizationId);

    if (!organization) {
        res.status(403).json({
            message: "Organization does'nt exists!"
        })
        return;
    }

    const isMember = organization.members.some(
        m => m.toString() === userId
    )

    if (!isMember && organization.admin.toString() !== userId) {
        res.status(403).json({
            message: "You are not member of this organization!"
        })
        return;
    }

    const members = await userModel.find({
        _id: {
            $in: organization.members
        }
    });

    const memberdetails = members.map(m => ({
        id: m._id,
        username: m.username
    }))

    res.json({
        members: memberdetails
    })
})

// UPDATE
app.put("/issues", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const issueId = req.body.issueId;

    const issue = await issueModel.findById(issueId)

    if (!issue) {
        res.status(404).json({
            message: "Issue does'nt exists!"
        })
        return;
    }

    const board = await boardModel.findById(issue.boardId)

    if (!board) {
        res.status(404).json({
            message: "Board not found!"
        })
        return;
    }

    const organization = await organizationModel.findById(board.organizationId)

    if (!organization) {
        res.status(403).json({
            message: "Organization does'nt exists!"
        })
        return;
    }

    const isMember = organization.members.some(
        m => m.toString() === userId
    )

    if (!isMember && organization.admin.toString() !== userId) {
        res.status(404).json({
            message: "You're not the member of this organization"
        })
        return;
    }

    if (req.body.title) {
        issue.title = req.body.title;
    }

    if (req.body.description) {
        issue.description = req.body.description;
    }

    await issue.save();

    res.json({
        message: "Issue updated successfully"
    });

})

//DELETE -- FIND THE BUG and fix it
app.delete("/members", authMiddleware, async (req, res) => {
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
    await organization.save()

    console.log("After members")
    console.log(organization.members);

    res.json({
        message: "Member deleted!"
    })
})

app.listen(3000, function () {
    console.log("Server Running on port 3000")
});
