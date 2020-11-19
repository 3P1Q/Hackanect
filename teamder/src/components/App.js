import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './Profile/Profile.css';
import Navbar from './Navbar/Navbar'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProfilePage from './Profile/profilePage'
// import Search Bar Component
import HorizontalLinearStepper from "./SearchBar";
// import Tags from './Tags';

// import Test from './Test';


const App = () => {
  
    return (
      <Router>
        <Navbar />
        <Switch>
        
          <Route 
            path="/profile/:username" 
            render={(props)=>(
            <ProfilePage routerProps={props}/>
            )
          } />
            {/* <ProfilePage /> */}
            {/* <Tags /> */}
          {/* </Route> */}

          <Route path='/' exact>
            <h1>Welcome to Teamder's</h1>
            <HorizontalLinearStepper/>
          </Route>

          <Route 
            path="/login" 
            exact 
            render={
              () => <Login/>
            } />

          <Route 
            path="/register" 
            exact 
            render={
              () => <Register/>
            } />
          {/* <Route path="/getalldata" exact component={Test} /> */}

        </Switch>
      </Router>
    );
}

export default App;
