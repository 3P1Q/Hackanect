import React, { useState} from 'react';
// import {userDataContext} from '../Profile/profilePage';
import {Modal,Button} from 'react-bootstrap';
import {TextField} from '@material-ui/core';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;


const Social = (props) => {

    // console.log(props.social);

    const social = props.social;

    // const [facebook, setFacebook] = useState("");
    // const [github, setGithub] = useState("");
    // const [twitter, seyYwitter] = useState("");
    // const [linkedin, setLinkedin] = useState("");

    function valChanged(e) {
        const s = e.target;

        // console.log(s.id);
        if(s.id === ("outlined-basic facebook")){
 
            props.setSocial((prev) => ({
                ...prev,
                facebook: s.value
            }))
        }
        else if(s.id === ("outlined-basic github")){
 
            props.setSocial((prev) => ({
                ...prev,
                github: s.value
            }))
        }
        else if(s.id === ("outlined-basic twitter")){
 
            props.setSocial((prev) => ({
                ...prev,
                twitter: s.value
            }))
        }
        else if(s.id === ("outlined-basic linkedin")){
 
            props.setSocial((prev) => ({
                ...prev,
                linkedin: s.value
            }))
        }
     }

     
     return (
          <>
            
            <div className="social-modal-button">Social Media links</div>
            <TextField   style={{margin: "2% 0"}} fullWidth value={props.social.facebook} onChange={valChanged} id="outlined-basic facebook" label="Facebook" variant="outlined"/>
            <TextField   style={{margin: "2% 0"}} fullWidth value={props.social.github} onChange={valChanged} id="outlined-basic github" label="Github" variant="outlined"/>
            <TextField   style={{margin: "2% 0"}} fullWidth value={props.social.twitter} onChange={valChanged} id="outlined-basic twitter" label="Twitter" variant="outlined"/>
            <TextField   style={{margin: "2% 0"}} fullWidth value={props.social.linkedin} onChange={valChanged} id="outlined-basic linkedin" label="LinkedIn" variant="outlined"/>
            
          </>
        );

}

export default React.memo(Social);
