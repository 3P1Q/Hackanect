const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.post("/", (req, res) => {
    // const userArray= req.body.users;
    const chatUser = req.body.chatUser;
    if(req.user)
    {
            User.findOne({_id: req.user._id, "chats.user":chatUser}, function(err, user){
                if(!user)
                {
                    User.updateOne({_id:req.user._id},{$push:{chats : {user:chatUser, messages:[], ts: new Date(0).getTime()} }}, function(err, user){
                        console.log("Updated User");
                        console.log(user);
                    });
                    // res.write("first update done");
                }
                else{
                    // res.write("first update failed");
                }
            })
            User.findOne({username: chatUser, "chats.user":req.user.username}, function(err, user){
                // console.log("Found already!");
                console.log(user);
                if(!user)
                {
                    User.updateOne({username: chatUser},{$push:{chats : {user:req.user.username, messages:[], ts: new Date(0).getTime()} }}, function(err, user){
                        console.log("Updated User");
                        console.log("the second one");
                        console.log(user);
                    });
                    // res.write("second update done");
                    // res.send("updated");
                }
                else{
                    // res.write("first update failed");
                }
            })
            res.send("DONE");
    }
    else{
        res.send("Not Authenticated");
    }
})

module.exports = router;