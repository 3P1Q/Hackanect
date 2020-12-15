// Mongoose profileModel goes here
const { model } = require("mongoose");
const mongoose = require("mongoose");
const passport = require('passport');
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    googleId: String,
    githubId: String,
    profilePic: String,
    description: String,
    gender: String,
    projects: [{title: String, description: String, githubLink: String}],
    techStack: {
        type: Array,
        default: []
    },
    social: {github: String, facebook: String, linkedin: String, twitter: String},
    hackathons: [{name:String, link:String}],
    chats: Array

});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());

module.exports = User;


