// Mongoose profileModel goes here
const { model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profilePic: String,
    about: String,
    gender: String,
    project: [{title: String, link: String}],
    techStack: [String],
    social: {github: String, facebook: String, linkedIn: String, twitter: String},
    discord: String

});

module.exports = mongoose.model('userModel', userSchema);


