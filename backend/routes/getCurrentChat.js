const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.post("/", (req,res) => {
    // console.log(req);
    const chatUser = req.body.chatUser;
   if(req.user){
       User.findOne({_id: req.user.id}, function(err, user)
       {
        //    console.log(users);
            const chats = user.chats;
            var currChat = {};
            for(var i=0;i<chats.length;i++)
            {
                if(chats[i].user === chatUser)
                {
                    currChat = chats[i];
                    break;
                }
            }
            res.send(currChat);
       })
   }else{
       res.send("Not Authenticated");
   }
});

module.exports = router;