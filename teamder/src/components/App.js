import React, {Component} from 'react';
<<<<<<< Updated upstream
import './App.css';
<<<<<<< HEAD
import ProjectCard from './ProjectCard/ProjectCard'
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
>>>>>>> Stashed changes

import './App.css';
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
            <h1>Welcome to Teamder</h1>
          </Route>

          
        </Switch>
      </Router>
    );
  }
  
=======
import NameAndAvatar from './NameAndAvatar';
import Menu from './Menu';
import TechStack from './TechStack';
import {Container} from '@material-ui/core';

function App() {
  return (
    <Container>
      {/* <NameAndAvatar src="" name="Harshdeep Singh Pruthi"/>
      <Menu />
      <TechStack tags={["React","Mongodb","Express","Node"]}/> */}
    </Container>
  );
>>>>>>> f52db07d075629a9a2bc7bf834217602eec2401c
}

export default App;
