const express = require("express");
const passport = require("passport");
const Chat = require("../models/chatModel");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req,res) => {
    // console.log(req);
   if(req.user){
       User.findOne({_id: req.user.id}, function(err, user)
       {
        //    console.log(users);
           Chat.find({_id : { $in : user.chats }}, function(err, chats){
               const chatsData = chats;
               var newChats = chatsData.map((chat) => {
                   console.log(chat);
                    let user = "";
                    if(chat.users[0] === req.user.username)
                        user = chat.users[1];
                    else    
                        user = chat.users[0];

                    return {
                        user: user,
                        messages: chat.messages,
                        ts: chat.ts
                    }
               });
               res.send(newChats);
           })
       })
   }else{
       res.send("Not Authenticated");
   }
});

module.exports = router;
