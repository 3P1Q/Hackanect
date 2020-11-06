import {Collapse, Container, IconButton, Typography} from "@material-ui/core";
import { Close  } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React ,{useState} from "react";
import Form from "./Form";

const useStyles = makeStyles(() => ({
    Collapse: {
      marginTop: "5rem",
      borderRadius: "4px",
    },
    forgot:{
        position:"relative",
        marginTop:"-12%",
        marginBottom:"10%",
        textAlign : "center"
    }
  }));
  

const Login =() => {
    const [open, setOpen] = useState(true);

    const classes = useStyles();

    return <Container>
    <Form type="LOGIN"/>
    </Container>
}

export default Login;