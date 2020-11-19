import {Container} from "@material-ui/core";
import React from "react";
import Form from "./Form";

const Register =({setUserData}) => {
    return <Container ><Form 
        // setUserData={setUserData} 
        style={{marginTop:"50px"}} 
        type="REGISTER" 
    /></Container>
}

export default Register;