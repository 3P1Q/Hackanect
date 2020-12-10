const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req,res) => {
    // console.log(req);
   if(req.user){
       User.findOne({_id: req.user.id}, function(err, user)
       {
        //    console.log(users);
           res.send(user.chats);
       })
   }else{
       res.send("Not Authenticated");
   }
});

module.exports = router;
