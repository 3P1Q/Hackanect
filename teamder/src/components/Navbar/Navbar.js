import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import {userLoggedInContext} from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 0,
    marginBottom: "5%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.95,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    marginLeft: "30px",
  },
}));

function Navbar() {
  const [loggedIn] = useContext(userLoggedInContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: '#4D4C7D'}} >
        <Toolbar>
          <img src="/teamderwithoutname.png" alt="logo" style={{height:"3.5rem"}}/>
          <p style={{fontSize:"1.2rem", paddingLeft:"0.5rem"}}>Teamder</p>
          <Typography className={classes.title}>
          </Typography>
          <Link to='/' className={classes.link}>HOME</Link>
          {loggedIn
          ?<Link to={`/profile/`+localStorage.getItem("username")} className={classes.link}>PROFILE</Link>
          :<Link to='/login' className={classes.link}>LOGIN</Link>}
          {loggedIn
          ?<Link to='/' className={classes.link}>VIDEO CALL</Link>
          :<Link to='/register' className={classes.link}>REGISTER</Link>}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
