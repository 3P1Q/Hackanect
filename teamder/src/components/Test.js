import axios from 'axios';
import React from 'react';
axios.defaults.withCredentials = true;

function Test(){
axios.post("http://localhost:5000/getalldata",{})
.then(res => console.log(res.data));
return <h1>Test.js</h1>
}
export default Test;

