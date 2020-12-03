const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to isLoggedIn");
});

router.post("/", (req,res) => {
   if(req.user)
   {
       res.send("true")
   }
   else
   {
       res.send("false")
   }
});

module.exports = router;
