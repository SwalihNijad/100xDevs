const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {

    const token = req.headers.token; // jwt  takes thet token fromm headers
    const decoded = jwt.verify(token, "Nijad123"); //verifies it
    const userId = decoded.userId;  //checks wheather the user id has same token
    if (userId) {
        req.userId = userId;    //if yes then go further else no
        next();
    } else {
        res.status(403).json({
            message: "Token was incorrect"
        })
    }
}
module.exports = {
    authMiddleware: authMiddleware
}