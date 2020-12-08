const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to getuserdata");
});

router.post("/", (req,res) => {
    // console.log(req);
    const id = req.body.username;
    // console.log(id);
    
   if(req.user){
       User.findOne({username:id}, function(err, user)
       {
        // console.log(user);
        //    console.log(users);
           res.send(user);
       })
   }else{
       res.send("Not Authenticated");
   }
});

module.exports = router;
