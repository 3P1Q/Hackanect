import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
  // root: {
  //   // minWidth: 275,
  //   maxWidth: 350,
  //   backgroundColor: '#827397',
  //   margin: 0,
  //   color: '#FFF'
  // },
  // card: {
  //   paddingBottom: 10
  // },
  // title: {
  //   color: '#FFF',
  //   marginTop: 10,
  //   fontFamily: "inherit"
  // },
  // desc: {
  //   marginTop: 10,
  //   marginBottom: 10,
  //   fontFamily: "inherit"
  // },
  // link: {
  //   textAlign: "right"
  // }
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <div className="projects-container">  

            <div>
                <h2>Projects</h2>
            </div>

            <div className="projects">
                {props.deets.map((card, index) => {
                  return (
                     <div key={index} className="project-card">
                            <div className="project-title">
                            {card.title}
                            </div>
                            <div className="project-description">
                            {card.description}
                            </div>
                            <div className="project-link">
                              <Link to={card.githubLink}  color="inherit">
                                  <GitHubIcon></GitHubIcon>
                              </Link>
                            </div>
                      </div>
                  )
                  })}
           </div>      
        
    </div>
  );
}
