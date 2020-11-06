//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");

const mongoose = require('mongoose');

const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

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


// mongoDB Connection
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);
// mongoDB connection finished


const User = require("./models/profileModel");
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*Routes Config*/

const indexRoute = require("./routes/index");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const { Schema } = require("mongoose");

/*-----Routes Config End------*/


/*App Config*/

app.use("/",indexRoute);
app.use("/login",loginRoute);
app.use("/register",registerRoute);

/*------App Config End--------*/



app.listen(port, function(){
    console.log("Server started locally at port 5000");
});

