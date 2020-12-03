import {Container} from "@material-ui/core";
import React  from "react";
import Form from "./Form";

const Login =({setUserData}) => {
    return <Container>
    <Form 
        // setUserData = {setUserData}
        type="LOGIN"
    />
    </Container>
}

export default Login;