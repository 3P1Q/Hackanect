//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const lodash = require("lodash");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));

/*Routes Config*/

const indexRoute = require("./routes/index");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");

/*-----Routes Config End------*/


/*App Config*/

app.use("/",indexRoute);
app.use("/login",loginRoute);
app.use("/register",registerRoute);

/*------App Config End--------*/



app.listen(port, function(){
    console.log("Server started locally at port 5000");
});