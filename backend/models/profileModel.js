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
    profilePic: String,
    description: String,
    gender: String,
    project: [{title: String, link: String}],
    techStack: [String],
    social: {github: String, facebook: String, linkedIn: String, twitter: String},
    discord: String

});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());

module.exports = User;


