const express = require("express");
const passport = require("passport");
const Hackathon = require("../models/hackathonModel");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to getHackathons");
});

router.post("/", (req,res) => {
    // console.log(req);
       Hackathon.find({}, function(err, hacks)
       {
           //console.log(users);
           res.send(hacks);
       })
});

module.exports = router;
