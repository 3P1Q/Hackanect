const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.post("/", (req,res) => {
    // console.log(req);
    const usersP = req.body.users;
   if(req.user){
       User.find({username: {$in:usersP}}, function(err, users)
       {
        //    console.log(users);
        const pics = users.map((user)=>({user:user.username, pic:user.profilePic}));
           res.send(pics);
       })
   }else{
       res.send("Not Authenticated");
   }
});

module.exports = router;
