import React, {Component} from 'react';
import './App.css';
<<<<<<< HEAD
import ProjectCard from './ProjectCard/ProjectCard'

//temporary json file(s)      (should be removed later)
import projectcard from '../exampleJSONs/projectcard.json'

class App extends Component {
  render(){
    return (
    <div>
      <h1>Welcome to Teamder</h1>
      <ProjectCard deets={projectcard} />
    </div>
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
