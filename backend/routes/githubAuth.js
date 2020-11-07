const GitHubStrategy = require( 'passport-github2' ).Strategy;
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const User = require("../models/profileModel");
// const findOrCreate = require('mongoose-findorcreate');
const router = express.Router();


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/teamder"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/auth/google/teamder",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);

//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

router.get("/",
  passport.authenticate('github', { scope: ["user:email"] })
);

router.get("/teamder",
  passport.authenticate('github', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.send("Github Authentication Done");
  });

  module.exports= router;