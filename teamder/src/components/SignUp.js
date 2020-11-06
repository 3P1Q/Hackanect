import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function SignUp(){
    const classes = useStyles();
    return(
        <div className="root">
            <Grid container spacing={0}>
                <Grid item xs={6} className="image"></Grid>
                <Grid item xs={6} className="content">
                    <div className="paper">
                        <h1 className="heading">Register</h1>
                        <div className="formContainer">
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField required className="field" id="outlined-basic" label="Email" variant="outlined"/>
                                <TextField required className="field" id="outlined-basic" label="Password" variant="outlined" />
                                <TextField required className="field" id="outlined-basic" label="Confirm Password" variant="outlined" />
                            </form>
                        </div>
                        <p>Already a User? <Link>Sign In</Link></p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default SignUp;

