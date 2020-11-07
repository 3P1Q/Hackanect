import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Profile.css';
import Navbar from './Navbar'
import Login from './Login'
import Register from './Register'
import ProfilePage from '../screens/ProfilePage/profilePage'

class App extends Component {
  render(){
    return (
      <Router>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/profile">Profile</Link> */}
        <Navbar />
        <Switch>
        
          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path='/' exact>
            <h1>Welcome to Teamder's</h1>
          </Route>

          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />

        </Switch>
      </Router>
    );
  }
}

export default App;
