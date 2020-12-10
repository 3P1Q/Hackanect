const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.post("/", (req, res) => {
    // const userArray= req.body.users;
    console.log(req.body.chatUser);
    console.log(req.body.messages);
    if(req.user)
    {
        // User.findOne({_id: req.user._id}, function(err, user){
        //     console.log("Inide Find");
        //     console.log(user);
        // })
        User.findOneAndUpdate({_id: req.user._id, 'chats.user':req.body.chatUser },
            {'$set':{'chats.$.messages' : req.body.messages} },
            function(err, user){
                res.send("Updated Chat");
            })
        // User.findOneAndUpdate({_id: req.user._id, chats: { $elemMatch : { user: req.body.chatUser}} },
        //     {'$set':{'chats' : {user:req.body.chatUser, messages:["new"]}} },
        //     function(err, user){
        //         console.log(user);
        //     })

        // User.findOne({chats: {$elemMatch : {user:"admin400"}}} , function(err, user){
        //     console.log("IN FIND");
        //     console.log(user);
        // })
    }
    else
    {
        res.send("Not Authenticated");
    }
})

module.exports = router;