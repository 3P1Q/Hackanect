import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link,Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Login(){
    const classes = useStyles();
    return(
        <div className="root">
            <Grid container spacing={0}>
                <Grid item xs={6} className="image"></Grid>
                <Grid item xs={6} className="content">
                    <div className="paper">
                        <h1 className="heading">Login</h1>
                        <div className="formContainer">
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField required className="field" id="outlined-basic" label="Email" variant="outlined"/>
                                <TextField required className="field" id="outlined-basic" label="Password" variant="outlined" />
                            </form>
                        </div>
                        <p>New to Teamder? <Link>Sign Up</Link></p>
                        {/* <Button variant="contained">Sign Up with Google</Button>
                        <Button variant="contained">Sign Up with Github</Button> */}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;

