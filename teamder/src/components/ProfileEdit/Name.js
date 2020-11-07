import React,{useState} from 'react';
import {TextField} from '@material-ui/core';

const Name = () => {
    const [name,setName] = useState("");
    console.log(name);
    return(
        <div>
                <TextField    style={{margin: "2% 0"}} fullWidth value={name} onChange={(e) =>{setName(e.target.value)}} id="outlined-basic" label="Name" variant="outlined"/>
        </div>

    );
}

export default Name;