import React from 'react';
import {Paper, Grid} from '@material-ui/core';
import './App.css';

const TechStack = (props) => {
    function getTag(tag, index)
    {
        return <Grid key={index} item xs={3} sm={2}>
            <Paper className="tag"> {tag} </Paper>
            </Grid>;
    }
    props.tags.forEach((tag) => {
        console.log(tag);
    });
    console.log(props.tags);
    return <div>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
                <h2 style={{margin:"0"}}>Tech Stack :</h2>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Grid container spacing={3}>
                    {props.tags.map((tag, index)=>getTag(tag, index))}
                </Grid>
            </Grid>
        </Grid>
        
    </div>
}

export default TechStack;