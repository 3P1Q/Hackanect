const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const hackathonSchema = new mongoose.Schema({
    name: String,
    link: String
});

hackathonSchema.plugin(findOrCreate);

const Hackathon = new mongoose.model("Hackathon", hackathonSchema);

module.exports = Hackathon;


