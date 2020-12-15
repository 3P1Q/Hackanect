import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';


export default function ProjectCard(props) {

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
