const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to login");
});

router.post("/", (req,res) => {
    const user = new User({
        username: req.body.username+"@teamder-app",
        password: req.body.password
    });

    req.login(user, (err) => {
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req, res, () => {
                // res.send("Welcome !")
                res.send(user);
            })
        }
    })
    
});

module.exports = router;