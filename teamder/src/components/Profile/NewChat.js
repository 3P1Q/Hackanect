import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import axios from 'axios';
import querystring from 'querystring';
import {Redirect} from 'react-router-dom';

import SERVER_URL from '../../utils/constants';

axios.defaults.withCredentials = true;

const NewChat = (props) => {
    function createNewChat(){
        axios.post(`${SERVER_URL}/newchat`, querystring.stringify({chatUser: props.user}))
        .then(res=>{
            console.log(res);
            
        })
        window.location="/chats";
    }
    // return props.user===localStorage.getItem("username")?(""):(
    //     <div style={{textAlign:"center", margin:"-15% 0 15%"}}><ChatIcon onClick={createNewChat} style={{fontSize:"2rem", cursor:"pointer"}}/></div>
    //     <span>Connect</span>
    // )
    return <span onClick={createNewChat}>Connect</span>
}

export default NewChat;