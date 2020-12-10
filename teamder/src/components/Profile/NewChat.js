import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import axios from 'axios';
import querystring from 'querystring';
import {Redirect} from 'react-router-dom';

axios.defaults.withCredentials = true;

const NewChat = (props) => {
    function createNewChat(){
        axios.post("http://localhost:5000/newchat", querystring.stringify({chatUser: props.user}))
        .then(res=>{
            console.log(res);
            
        })
        window.location="/chats";
    }
    return props.user===localStorage.getItem("username")?(""):(
        <div style={{textAlign:"center", margin:"-15% 0 15%"}}><ChatIcon onClick={createNewChat} style={{fontSize:"2rem", cursor:"pointer"}}/></div>
    )
}

export default NewChat;