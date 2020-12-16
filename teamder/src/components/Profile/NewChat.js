import React from 'react';
import axios from 'axios';
import querystring from 'querystring';

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
    return <span onClick={createNewChat}>Message</span>
}

export default NewChat;