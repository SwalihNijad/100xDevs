const mongoose = require("mongoose");

const Schema = require("Schema");
const ObjectId = require("ObjectID");

const User = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
}),

const Todo = new Schema({
    userID: ObjectId,
    title: String,
    done: Boolean
});

const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

module.exports = {
    UserModel,
    TodoModel
}

