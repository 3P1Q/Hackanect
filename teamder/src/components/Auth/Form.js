import {
    IconButton,
    FilledInput,
    InputLabel,
    InputAdornment,
    FormControl,
    Card,
    CardContent,
    CardHeader,
    Container,
    Typography
  } from "@material-ui/core";
  import Button from '@material-ui/core/Button';
  import Divider from '@material-ui/core/Divider';
  import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import axios from 'axios';
import querystring from 'querystring';
import GitHubIcon from '@material-ui/icons/GitHub';
import {ReactComponent as GoogleIcon} from '../search.svg';
import { Redirect } from "react-router-dom";
import "./Auth.css";

import SERVER_URL from '../../utils/constants';


axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
    submitButton:{
        margin:"3% auto",
        display: "block"
    },
    Card: {
      marginBottom: "1rem",
    },
    Head:{
        textAlign:"center",
        marginTop:"5%"
    },
    Content:{
        textAlign:"center",
        color: "#ececec"
    },
    newAcc:{
        textAlign:"center",
        marginBottom: "5%"
    },
    Form:{
        display: "block",
        margin: "0",
        width: "100%",
        minWidth:"400px",
        backgroundColor: "#827397",
        color: "#ececec"
    },
    Formdata:{
        margin: " 2% 5%"
          ,"& *" : {
            color: "#e8e8e8"
          }
    }
  }));

  

const Form =(props) => {

  function authG(){
    return <Redirect to="/auth/google" />
  }

  function sendRequest(){
    if(props.type==="REGISTER")
    {
        axios.post(`${SERVER_URL}/register`, querystring.stringify({username: values.username, password: values.password}), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        credentials: 'include',
        withCredentials: true
      }).then(function(response){
        if (response.status === 200) {
          localStorage.setItem('username', response.data.username)
          window.location = `/profile/${response.data.username}`          
        }
        console.log(response);
      });
    }
    if(props.type==="LOGIN")
    {
      axios.post(`${SERVER_URL}/login`, querystring.stringify({username: values.username, password: values.password}), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        credentials: 'include',
        withCredentials: true
      }).then(function(response){
        if (response.status === 200) {
          localStorage.setItem('username', response.data.username)
          window.location = `/profile/${response.data.username}`
          // const data = response.data
          // console.log(data);
          // props.setUserData({_id: '1' })
        }
        console.log(response);
      });
    }
    

  }

    const classes = useStyles();

    const formType = props.type;

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        cpassword: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return <div className={`containers ${formType==="LOGIN" && "containers-login"}`} style={{marginTop: formType==="REGISTER" && "-2%"}}>
            <div className="content" style={{display: formType==="LOGIN" ? "block" : "none"}}>
              <h1>New Here!?</h1>
              {/* <img src="/images/welcome.svg"/> */}
              <div>
                Start your journey with us!
              </div>
              <div>
                Register Now
              </div>
              <Button style={{marginTop: "30px"}} variant="contained" color="primary" href="/register">
                Register
              </Button>
            </div>
            <div className="card-container">
              {/* <Card className={classes.Form}> */}
                <div>
                  {/* <CardHeader title={formType==="LOGIN" ? "Sign In to TEAMDER" : "Create Account"} className={classes.Head}/> */}
                  <h1 className={classes.Head}>{formType==="LOGIN" ? "Sign In to TEAMDER" : "Create Account"}</h1>
                  <div style={{textAlign:"center",marginTop:"4%"}}>
                  <div style={{margin:"2% 1%",display:"inline-block"}}>
                    <Button href="/auth/google" style={{backgroundColor: "rgb(66, 133, 244)", color: "white"}} color="secondary">
                      {formType==="REGISTER"?<span><GoogleIcon style={{height: "30px", backgroundColor:"white", padding:"2%"}}/> &nbsp; Sign Up With Google</span>:<span><GoogleIcon style={{height: "30px", backgroundColor:"white", padding:"2%"}}/> &nbsp; Sign In With Google</span>}
                    </Button>
                  </div>

                  <div style={{margin:"2% 1%",display:"inline-block"}}>
                    <Button href="/auth/github" style={{backgroundColor: "#323232", color: "white", borderRadius: "2%"}}  color="secondary">
                      {formType==="REGISTER"?<span><GitHubIcon />&nbsp; Sign Up With GitHub</span>:<span><GitHubIcon />&nbsp; Sign In With GitHub</span>}
                    </Button>
                  </div>
                  </div>
                  {/* <Divider variant="middle"/> */}
                  <div class="separator">OR</div>
                  <CardContent className={classes.Content}>
                  <FormControl className={classes.Formdata} variant="filled">
                  <InputLabel htmlFor="username">Username</InputLabel>
                      <FilledInput
                      name="username"
                      id="username"
                      value={values.username}
                      onChange={handleChange('username')}
                      // width="125%"
                      />
                  </FormControl>

                  <FormControl className={classes.Formdata} variant="filled">
                  <InputLabel htmlFor="password">Password</InputLabel>
                      <FilledInput
                      name="password"
                      id="password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                      <InputAdornment position="end">
                          <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                      }
                      // labelWidth={70}
                      />
                  </FormControl>

                  {formType==="REGISTER" && (<FormControl className={classes.Formdata} variant="filled">
                  <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                      <FilledInput
                      id="confirm-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.cpassword}
                      onChange={handleChange('cpassword')}
                      endAdornment={
                      <InputAdornment position="end">
                          <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                      }
                      // labelWidth={70}
                      />
                  </FormControl>)}
                  
                  <Button onClick={sendRequest} size="large" className={classes.submitButton} variant="contained" color="primary">{formType}</Button>
      
                  </CardContent>
                  {/* {formType==="LOGIN" && (<Typography className={classes.newAcc} variant="body2" component="p">
                  Don't have an account already?
                  <br></br>
                  <a href="/register">Create a new account here</a>
                  </Typography>)} */}
                  </div>
                  {/* </Card> */}
              </div>
              <div className="content" style={{display: formType==="LOGIN" ? "none" : "block"}}>
                    <h1>Already Joined!</h1>
                    {/* <img src="/images/welcome.svg"/> */}
                    <div>
                      To keep connected with us login 
                    </div>
                    <div>
                      with your personal info
                    </div>
                    <Button style={{marginTop: "30px"}} variant="contained" color="primary" href="/login">
                      Login
                    </Button>
              </div>
            </div>
}

export default Form;