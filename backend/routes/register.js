const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to register");
});

router.post("/", (req,res) => {
   
    User.register({username: req.body.username}, req.body.password, (err, user) => {
        // console.log(req.body);
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req, res, function(){
                // console.log(req);
                res.send("Authenticated");
            });
        }
    });
});

module.exports = router;
