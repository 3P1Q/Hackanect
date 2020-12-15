import React from 'react';
import {TextField} from '@material-ui/core';
import axios from 'axios';

axios.defaults.withCredentials = true;


const Social = (props) => {

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
            
            <div style={{fontWeight: '700',color: 'black',marginTop: "30px",fontSize: "20px"}}>Social Media links</div>
            <TextField   style={{margin: "2% 0"}} fullWidth value={props.social.facebook} onChange={valChanged} id="outlined-basic facebook" label="Facebook" variant="outlined"/>
            <TextField   style={{margin: "2% 0"}} fullWidth value={props.social.github} onChange={valChanged} id="outlined-basic github" label="Github" variant="outlined"/>
            <TextField   style={{margin: "2% 0"}} fullWidth value={props.social.twitter} onChange={valChanged} id="outlined-basic twitter" label="Twitter" variant="outlined"/>
            <TextField   style={{margin: "2% 0"}} fullWidth value={props.social.linkedin} onChange={valChanged} id="outlined-basic linkedin" label="LinkedIn" variant="outlined"/>
          </>
        );

}

export default React.memo(Social);
