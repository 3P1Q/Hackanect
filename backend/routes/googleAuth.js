const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const User = require("../models/profileModel");
// const findOrCreate = require('mongoose-findorcreate');
const router = express.Router();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/teamder",
    // userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    proxy: true
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    User.findOrCreate({ username: profile.email, googleId: profile.id, profilePic: profile.picture, name: profile.displayName}, function (err, user) {
      return cb(err, user);
    });
  }
));

router.get("/",
  passport.authenticate('google', { scope: ["profile","email"] })
);

router.get("/teamder",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    // res.send("Google Authentication Done");
    console.log(req.user);
    res.redirect(`http://localhost:3000/google/login/${req.user.username}`);
  });

  module.exports= router;