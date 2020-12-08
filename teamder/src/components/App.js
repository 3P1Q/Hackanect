import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './Profile/Profile.css';
import Navbar from './Navbar/Navbar'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProfilePage from './Profile/profilePage'
import Home from './Land/Home'
import Hackathon from './Hackathon/Hackathon';
// import Search Bar Component
import HorizontalLinearStepper from "./Search/SearchBar";
// import Tags from './Tags';

// import Test from './Test';
import axios from 'axios';
// import querystring from 'querystring';

axios.defaults.withCredentials = true;

const userLoggedInContext = React.createContext([Boolean, ()=>Boolean]);


const App = () => {
  
  // const login = false;
  const [loggedIn, setLoggedIn] = useState(false);
  const [logwait, setLogWait] = useState(true);
  // console.log(loggedIn);

  const getLogStatus = () => {
    return axios.post("http://localhost:5000/loggedin");
  }

  useEffect(()=>{
    async function userLogInStatus() {
      const logStatus = await getLogStatus();
      // console.log(logStatus);
      setLoggedIn(logStatus.data);
      setLogWait(false)
      // return logStatus.data;
    }
    userLogInStatus();
  },[])

  console.log(loggedIn);

//   async function PrivateRoute ({component: Component, ...rest}) {
//     const what = await userLogInStatus()
//     return (

//         // Show the component only when the user is logged in
//         // Otherwise, redirect the user to /signin page
//         <Route {...rest} render={props => (
//             what ?
//                 <Component routerProps={props} />
//             : <Redirect to="/login" />
//         )} />
//     );
// };

    return (
      <userLoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Navbar />
        <Switch>

          {/* <Route path="/profile" */}
          <Route 
            path="/profile/:username" 
            render={(props)=>logwait?("Loading")
            :(loggedIn?(
            <ProfilePage routerProps={props}/>
            )
            :(<Redirect to="/login" />))
          } />
          {/* <PrivateRoute path="profile/:username" component={ProfilePage} /> */}

          <Route path='/' exact>
            {/* <h1>Welcome to Teamder's</h1> */}
            <HorizontalLinearStepper/>
            {/* <HackathonSelector /> */}
            <Home />
          </Route>

          <Route 
            path="/login" 
            render={
              () => <Login/>
            } />

          <Route 
            path="/register"
            render={
              () => <Register/>
            } />
          {/* <Route path="/getalldata" exact component={Test} /> */}

          <Route 
            path="/hackathons" 
            render={
              () => <Hackathon/>
            } />

        </Switch>
      </Router>
      </userLoggedInContext.Provider>
    );
}

export default App;
export {userLoggedInContext};
