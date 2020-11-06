const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to register");
});

router.post("/", (req,res) => {
    res.send("Howdy-ho, this is the register page.");
});

module.exports = router;