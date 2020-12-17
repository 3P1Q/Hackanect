const express = require("express");
const Chat = require("../models/chatModel");
const router = express.Router();

router.post("/", async (req, res) => {
    const chatUser = req.body.chatUser;
    if(req.user)
    {
        var userArray = [chatUser,req.user.username];
        userArray = userArray.sort();

        Chat.updateOne({users: userArray},
            {messages: JSON.parse(req.body.messages) , ts: new Date()},
            function(err, chat){
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