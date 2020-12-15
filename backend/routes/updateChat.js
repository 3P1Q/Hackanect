const express = require("express");
const Chat = require("../models/chatModel");
const router = express.Router();

router.post("/", async (req, res) => {
    const chatUser = req.body.chatUser;
    console.log(JSON.parse(req.body.messages));
    if(req.user)
    {
        var userArray = [chatUser,req.user.username];
        userArray = userArray.sort();

        Chat.updateOne({users: userArray},
            {messages: JSON.parse(req.body.messages) , ts: new Date()},
            function(err, chat){
                console.log(chat);
                if(err) console.log(err);
            });
        res.send();
    }
    else
    {
        res.send("Not Authenticated");
    }
})

module.exports = router;