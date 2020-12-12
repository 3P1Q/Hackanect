import React from 'react';
import {TextField} from '@material-ui/core';

const Picture = (props) => {

    function picChanged(e)
    {
        props.setProfilePic(e.target.value);
    }
    return(
        <div>
                <TextField   style={{margin: "2% 0"}} fullWidth value={props.profilePic} onChange={picChanged} id="outlined-basic" label="Profile Picture Link" variant="outlined"/>
        </div>
        
    );
}

export default Picture;