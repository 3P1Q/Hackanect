import React from 'react';
import {Typography} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Bio = (props) => {
    //console.log(links.facebook);
    return (
        <>
        <Typography style={{height: "50%", width: "50%"}} className="bio">{props.description}</Typography>
        <div className="social-icons">
            <a href={props.facebook}><FacebookIcon/></a>
            <a href={props.github}><GitHubIcon /></a>
            <a href={props.twitter}><TwitterIcon /></a>
            <a href={props.linkedin}><LinkedInIcon /></a>
        </div>
        </>
    )
}

export default Bio;