// Mongoose profileModel goes here
const { model } = require("mongoose");
const mongoose = require("mongoose");
const passport = require('passport');
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    profilePic: String,
    about: String,
    gender: String,
    project: [{title: String, link: String}],
    techStack: [String],
    social: {github: String, facebook: String, linkedIn: String, twitter: String},
    discord: String

});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());

module.exports = User;


