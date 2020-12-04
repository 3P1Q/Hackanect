const express = require("express");
const passport = require("passport");
const User = require("../../models/profileModel");
const router = express.Router();

const {formatData, createVectors, findSimilar, getResults} = require("./model");

router.get("/", (req, res) => {
    res.send("Make a post request to get similar users.");
});

router.post("/", (req,res) => {
    // console.log(req);
    const id = req.body.id;
    if(req.user)
    {
        User.find({}, function(err, users)
        {
            if(!err)
            {
                const formattedData = formatData(users);
                const vectors = createVectors(formattedData);
                const results = findSimilar(vectors);

                res.send(getResults(req.user._id, results));
            }
        });
    }
    else{
        res.send("Not Authenticated");
    }
    
//    if(req.user){
//        User.find({}, function(err, users)
//        {
//            console.log(users);
//            res.send(users);
//        })
//    }else{
//        res.send("Not Authenticated");
//    }
});

module.exports = router;
