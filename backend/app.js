//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.send("This is the home page, should be working fine.");
});

app.get("/login", function(req,res){
    res.send("Howdy-ho, this is the login page.");
});

app.get("/signup", function(req,res){
    res.send("What's up man, sign up here!");
});

app.post("/login", function(req,res){
    console.log("Nothing to see here.");
});

app.post("/signup", function(req, res){
    console.log("Hello friends, sign up karlo.");
});

app.listen(3000, function(){
    console.log("Server started locally at port 3000");
});