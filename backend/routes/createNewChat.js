const express = require("express");
const Chat = require("../models/chatModel");
const User = require("../models/profileModel");
const router = express.Router();

router.post("/", (req, res) => {
    // const userArray= req.body.users;
    const chatUser = req.body.chatUser;
    if(req.user)
    {

        var userArray = [chatUser,req.user.username];
        userArray = userArray.sort();
        Chat.findOne({users: userArray}, function(err, chat){
            if(!chat)
            {
                const newChat = new Chat({
                    users: userArray,
                    messages: [],
                    ts: new Date(0)
                });

                newChat.save();

                User.updateMany({username : { $in : userArray}}, {$push :{ chats : newChat._id }}, function(err, users){
                    if(err) console.log(err);
                    // if(err) res.send(err);
                })

            }
        }) 
            res.send();
    }
    else{
        res.send("Not Authenticated");
    }
})

module.exports = router;