import React, {Component} from 'react';
import './App.css';
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
  
}

export default App;
