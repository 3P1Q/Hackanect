//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");

const mongoose = require('mongoose');

const session = require('express-session');
const passport = require("passport");

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));

// Set up sessions
app.use(session({
    secret: "The Tinder for Techies.",
    resave: false,
    saveUninitialized: false
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());

// Session setup complete

app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);




// mongoDB Connection
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);
// mongoDB connection finished


const User = require("./models/profileModel");
passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

/*Routes Config*/

const indexRoute = require("./routes/index");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const googleAuth = require("./routes/googleAuth");
const githubAuth = require("./routes/githubAuth");
const editProfile = require("./routes/editProfile");
const getAllData = require('./routes/getAllData');
const getUserData = require('./routes/getUserData');
const isLoggedIn = require('./routes/isLoggedin');
const { Schema } = require("mongoose");

/*-----Routes Config End------*/


/*App Config*/

app.use("/",indexRoute);
app.use("/login",loginRoute);
app.use("/register",registerRoute);
app.use("/auth/google", googleAuth);
app.use("/auth/github", githubAuth);
app.use("/profile/edit", editProfile);
app.use("/getalldata", getAllData);
app.use("/getuserdata",getUserData);
app.use("/loggedin", isLoggedIn);

/*------App Config End--------*/



app.listen(port, function(){
    console.log("Server started locally at port 5000");
});

