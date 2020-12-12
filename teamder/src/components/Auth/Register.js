import {Container} from "@material-ui/core";
import React from "react";
import Form from "./Form";

const Register =({setUserData}) => {
    return <div ><Form 
        // setUserData={setUserData} 
        style={{marginTop:"50px"}} 
        type="REGISTER" 
    /></div>
}

export default Register;