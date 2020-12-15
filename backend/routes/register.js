const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to register");
});

router.post("/", (req,res) => {
    // const username = req.body.username+"@teamder-app";

    User.findOne({username: req.body.username}, (err, user)=>{
        if(user)
        {
            res.status(409).send("Already Exists");
        }
        else
        {
            User.register({username: req.body.username}, req.body.password, (err, user) => {
                if(err){
                    console.log(err);
                }else{
                    passport.authenticate("local")(req, res, function(){
                        // console.log(req);
                        res.send(user);
                    });
                }
            });
        }
    })
   
});

module.exports = router;
