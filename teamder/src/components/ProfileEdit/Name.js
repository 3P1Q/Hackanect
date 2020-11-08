import React,{useContext, useEffect, useState} from 'react';
import {TextField} from '@material-ui/core';
import {userDataContext} from '../../screens/ProfilePage/profilePage';

const Name = (props) => {
    const [data,setData] = useContext(userDataContext);
    // const [name,setName] = useState("");
    // console.log(name);

    function nameChanged(e)
    {
        props.setName(e.target.value);
        // setData({
        //     name:e.target.value
        // });
    }
    // useEffect(()=>{
    //     setData((prev)=>({
    //         ...prev,
    //         name: name
    //     }))
    // },[name]);
    return(
        // <userDataContext.Consumer>
        <div>
                <TextField   style={{margin: "2% 0"}} fullWidth value={props.name} onChange={nameChanged} id="outlined-basic" label="Name" variant="outlined"/>
        </div>
        // </userDataContext.Consumer>

    );
}
// Name.contextType = userDataContext;

export default Name;