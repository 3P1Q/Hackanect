const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to register");
});

router.post("/", (req,res) => {
    
    const freshUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profilePic: req.body.image,
        about: req.body.about,
        gender: req.body.gender,
        project: {
            title: req.body.projectTitle,
            link: req.body.projectLink
        },
        techStack: req.body.stackArray,
        social: {
            github: req.body.github,
            facebook: req.body.fb,
            linkedIn: req.body.linkedIn,
            twitter: req.body.twitter
        },
        discord: req.body.twitter
    });

    freshUser.save(function(err){
        if(err) {
            console.log(err);
        }
    });
    
    // res.send("Howdy-ho, this is the register page.");
});

module.exports = router;