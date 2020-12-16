import React from 'react';
import {TextField} from '@material-ui/core';

const Name = (props) => {

    function nameChanged(e)
    {
        props.setName(e.target.value);
    }
    return(
        <div>
                <TextField   style={{margin: "2% 0"}} fullWidth value={props.name} onChange={nameChanged} id="outlined-basic" label="Name" variant="outlined"/>
        </div>
        
    );
}

export default Name;