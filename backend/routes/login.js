const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to login");
});

router.post("/", (req,res) => {
    res.send("Howdy-ho, this is the login page.");
});

module.exports = router;