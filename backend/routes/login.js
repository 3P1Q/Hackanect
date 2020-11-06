const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to login");
});

router.post("/", (req,res) => {

    var inputEmail = req.body.email;
    var inputPassword = req.body.password;

    User.findOne({email: inputEmail, password: inputPassword}, function(err){
        if (err) {
            console.log(err);
        } else {
            res.render("home");
        }
    });


    // res.send("Howdy-ho, this is the login page.");
});

module.exports = router;