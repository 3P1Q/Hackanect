const express = require("express");
const passport = require("passport");
const User = require("../../models/profileModel");
const router = express.Router();

const {formatData, createVectors, findSimilar, getResults} = require("./model");

router.get("/", (req, res) => {
    
});

router.post("/", (req,res) => {
    const hackathon = req.body.data!==''?JSON.parse(req.body.data):'';
    const name = hackathon.name;
    // console.log(typeof hackathon);
    var techStack = req.body.techStack;
    const stackFilter = req.body.stackFilter;
    if(typeof req.body.techStack === 'string')
    {
        techStack = [req.body.techStack];
    }
    // console.log(stackFilter);
    // console.log(techStack);
    if(req.user)
    {
        User.find({}, function(err, users)
        {
            if(!err)
            {
                const userArr = users;
                if(stackFilter==='no')
                {
                    //console.log("coming here");
                    userArr.push({
                        _id:"%temp%",
                        name:"%temp%",
                        techStack: techStack
                    })
                    //console.log("added to ussArr");
                }
                const formattedData = formatData(userArr);
                //console.log(formattedData);
                const vectors = createVectors(formattedData);
                const results = findSimilar(vectors);

                var similars;
                if(stackFilter=='no'){
                    similars = getResults("%temp%", results);
                    similars = similars.filter((user)=>{
                        return !user.id.equals(req.user._id);
                    })
                    //console.log("here");
                }
                else
                    similars = getResults(req.user._id, results);

                const sim = similars.map(obj => obj.id);
                if(typeof hackathon.name !== 'undefined'){
                    User.find({_id:{$in : sim}, 'hackathons.name':" "+hackathon.name+" " }, function(err, users){
                        var newUsers = users.sort((a,b) => {
                            var ind1 = sim.findIndex((el) => el.toString() === a._id.toString());
                            var ind2 = sim.findIndex((el) => el.toString() === b._id.toString());
                            return ind1 - ind2;
                            });
                        res.send(newUsers);
                    });
                }
                else{
                    User.find({_id:{$in : sim}}, function(err, users){
                        var newUsers = users.sort((a,b) => {
                            var ind1 = sim.findIndex((el) => el.toString() === a._id.toString());
                            var ind2 = sim.findIndex((el) => el.toString() === b._id.toString());
                            return ind1 - ind2;
                            });
                        res.send(newUsers);
                    })
                }
                
            }
        });
    }
    else{
        res.send("Not Authenticated");
    }
});

module.exports = router;
