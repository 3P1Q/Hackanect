const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.post("/", async (req, res) => {
    // const userArray= req.body.users;
    const chatUser = req.body.chatUser;
    console.log(req.body.chatUser);
    console.log(JSON.parse(req.body.messages));
    if(req.user)
    {
        // User.findOne({_id: req.user._id}, function(err, user){
        //     console.log("Inide Find");
        //     console.log(user);
        // })
        await User.updateOne({_id: req.user._id, 'chats.user':req.body.chatUser },
            {$set:{'chats.$.messages' : JSON.parse(req.body.messages), 'chats.$.ts':new Date()}},
            function(err, user){
                res.write("First update done");
            })

        await User.updateOne({username: chatUser, 'chats.user':req.user.username },
            {$set:{'chats.$.messages' : JSON.parse(req.body.messages), 'chats.$.ts':new Date()}},
            function(err, user){
                res.write("Second update done");
            })   
        //     await User.updateOne({_id: req.user._id, 'chats.user':req.body.chatUser },
        //     {$push:{}},
        //     function(err, user){
        //         res.send("Updated Chat");
        //     })
        // await User.updateOne({_id: req.user._id},
        //         {$set:{$sort:{'chats.ts':-1}}})
        
        await User.aggregate([
            { $match : {
                _id: req.user._id
            }},

            {$unwind: '$chats'},

            {$sort: {
                'chats.ts' : -1
            }}
        ]);

        // ^ Ye try kiya but isse nahi ho raha kuch


        // User.findOneAndUpdate({_id: req.user._id, chats: { $elemMatch : { user: req.body.chatUser}} },
        //     {'$set':{'chats' : {user:req.body.chatUser, messages:["new"]}} },
        //     function(err, user){
        //         console.log(user);
        //     })

        // User.findOne({chats: {$elemMatch : {user:"admin400"}}} , function(err, user){
        //     console.log("IN FIND");
        //     console.log(user);
        // })
        res.send();
    }
    else
    {
        res.send("Not Authenticated");
    }
})

module.exports = router;