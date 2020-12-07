const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to getHackathons");
});

router.post("/", (req,res) => {
    // console.log(req);
       if(req.user)
       {
           User.findOne({_id: req.user._id}, function(err, user){
               if(!err)
               {
                   res.send(user.hackathons);
               }
           })
       }
});

module.exports = router;
