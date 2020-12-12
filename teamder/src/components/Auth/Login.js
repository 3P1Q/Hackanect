import {Container} from "@material-ui/core";
import React  from "react";
import Form from "./Form";

const Login =({setUserData}) => {
    return <div>
    <Form 
        // setUserData = {setUserData}
        type="LOGIN"
    />
    </div>
}

export default Login;