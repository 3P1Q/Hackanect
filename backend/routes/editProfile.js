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
            console.log(req.body);
        const userData = {
            name: req.body.name,
            profilePic: req.body.image,
            description: req.body.description,
            gender: req.body.gender,
            projects: JSON.parse(req.body.projectsString),
            techStack: req.body.techStack,
            social: JSON.parse(req.body.socialString),
            socialString: req.body.socialString,
            // projectsString: req.body.
        }
        
        User.updateOne({_id: req.user._id, username: req.body.username}, userData, function(err, user){
            // res.write("Edited");
            // res.se
        });
        }
        catch{
            
        }
        res.send("Edited");
    } 
    else {  // Redirect to login page here
        res.send("Not Authenticated");
    }
    
});

module.exports = router;