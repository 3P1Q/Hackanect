const express = require("express");
const passport = require("passport");
const User = require("../models/profileModel");
const router = express.Router();

router.get("/", (req,res) => {
    req.logout();
    res.send();
});

module.exports = router;