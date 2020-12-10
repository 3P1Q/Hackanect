const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to edit");
});

router.post("/", (req,res) => {
    if (req.user){
        try{
            console.log("Social"+req.body.socialString);
        const userData = {
            name: req.body.name,
            profilePic: req.body.image,
            description: req.body.description,
            gender: req.body.gender,
            project: req.body.projectArray,
            techStack: req.body.techStack,
            social: JSON.parse(req.body.socialString),
            socialString: req.body.socialString
        }
        
        User.updateOne({_id: req.user._id, username: req.body.username}, userData, function(err, user){
            res.write("Edited");
        });
        }
        catch{
            
        }
        res.send();
    } 
    else {  // Redirect to login page here
        res.send("Not Authenticated");
    }
    
});

module.exports = router;