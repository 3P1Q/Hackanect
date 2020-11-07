import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 0,
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
  const classes = useStyles();
//   const img = <img src="https://unsplash.it/40/40" />
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: '#4D4C7D'}} >
        <Toolbar>
          <img src="./teamderwithoutname.png" alt="logo" style={{height:"3rem"}}/>
          <p style={{fontSize:"1.2rem", paddingLeft:"0.5rem"}}>Teamder</p>
          <Typography className={classes.title}>
          </Typography>
          <Link to='/' className={classes.link}>HOME</Link>
          <Link to='/profile' className={classes.link}>PROFILE</Link>
          <Link to='/' className={classes.link}>VIDEO CALL</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
