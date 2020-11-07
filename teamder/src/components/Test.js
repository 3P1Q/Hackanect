// import axios from 'axios';
var axios = require('axios');
// import React from 'react';
axios.defaults.withCredentials = true;

function Test(){
    var data = [];
axios.post("http://localhost:5000/getalldata",{})
.then(res => console.log(res.data));
    // return data;
// return <h1>Test.js</h1>
}
module.exports = Test;
// export default Test;

