const express = require("express");
const passport = require("passport");
const Hackathon = require("../models/hackathonModel");
const router = express.Router();

router.get("/", (req, res) => {
    //res.send("Welcome to getHackathons");
    Hackathon.find({}, function(err, hacks)
       {
           //console.log(users);
           res.send(hacks);
       })
});

router.post("/", (req,res) => {
    // console.log(req);
       
});

module.exports = router;
