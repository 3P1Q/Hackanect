import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import ProfilePage from '../screens/ProfilePage/profilePage'

class App extends Component {
  render(){
    return (
      <Router>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path='/'>
          <h1>Welcome to Teamder's</h1>
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route>
          <SignUp />
        </Route>

        
      </Switch>
    </Router>
    );
  }
}

export default App;
