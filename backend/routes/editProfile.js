const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to edit");
});

router.post("/", (req,res) => {
    if (req.isAuthenticated()){
        const userData = {
            name: req.body.name,
            profilePic: req.body.image,
            description: req.body.description,
            gender: req.body.gender,
            project: req.body.projectArray,
            techStack: req.body.techStack,
            social: {
                github: req.body.github,
                facebook: req.body.fb,
                linkedIn: req.body.linkedIn,
                twitter: req.body.twitter
            }
        }
        
        User.update({_id: req.user._id, username: req.body.username}, userData, function(err, user){
            // user = {...user, userData};
            console.log("updated");
        });
        res.send("authenticetd");
      } else {  // Redirect to login page here
        res.redirect("/login");
      }
    
});

module.exports = router;