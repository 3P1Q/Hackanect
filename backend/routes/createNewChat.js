const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.post("/", (req, res) => {
    // const userArray= req.body.users;
    const chatUser = req.body.chatUser;
    if(req.user)
    {
        

        User.findOne({_id:req.user._id} , function(err, user)
        {
            var exists = false;
            User.findOne({_id: req.user._id, "chats.user":chatUser}, function(err, user){
                console.log("Found already!");
                // console.log(user);
                if(!user)
                {
                    User.updateOne({_id:req.user._id},{$push:{chats : {user:chatUser, messages:[], ts: new Date(0)} }}, function(err, user){
                        console.log("Updated User");
                        console.log(user);
                    });
    
                    res.send("updated");
                }
                else{
                    res.send("Already existed!");
                }
            })
            // if(!exists)
            // {
            //     console.log("New person");
                
            // }
            // else{
            //     res.send("Already Exists");
            // }
        })
    }
    else{
        res.send("Not Authenticated");
    }
})

module.exports = router;