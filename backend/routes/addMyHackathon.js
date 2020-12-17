const express = require("express");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to My Hackathon Update");
});

router.post("/", (req,res) => {
    if (req.user){
        try{
            //console.log("Social"+req.body.socialString);
            const hackathons = req.body.myHackathons;
            const hacks=[];
            if(typeof hackathons!=="undefined")
            {
                if(hackathons.length === 1)
                {
                    hacks = JSON.parse(req.body.myHackathons);
                }
                else{
                    for(var i=0;i<hackathons.length;i++)
                    {
                        if(hackathons[i] !== '')
                            hacks.push(JSON.parse(hackathons[i]))
                    }
                }
            }
        
        User.updateOne({_id: req.user._id}, {hackathons: hacks}, function(err, user){
            // user = {...user, userData};
            //console.log(req.user._id);
            //console.log(req.body.username);
            console.log("updated");
        });
        res.send("authenticetd");
        }
        catch(err){
            console.log(err);
        }
        
      } else {  // Redirect to login page here
        res.redirect("/login");
      }
    
});

module.exports = router;