import {Container} from "@material-ui/core";
import React  from "react";
import Form from "./Form";

const Login =() => {
    console.log(document.forms);
    return <Container>
    <Form type="LOGIN"/>
    </Container>
}

export default Login;