import React from 'react';
import {Paper, Grid} from '@material-ui/core';
import './Profile.css';

const TechStack = (props) => {
    function getTag(tag, index)
    {
        return (
                <div key={index} className="tag"> {tag} </div>
           );
    }
    props.tags.forEach((tag) => {
        // console.log(tag);
    });
    // console.log(props.tags);
    return <div className="tech-stack">
        <div>
            <div>
                <h2>Tech Stack</h2>
            </div>
            <div>
                <div>
                    {props.tags.map((tag, index)=>getTag(tag, index))}
                </div>
            </div>
        </div>
        
    </div>
}

export default TechStack;