import React, { useEffect, useState } from 'react';
// import chatc from './data';
import axios from 'axios';
import querystring from 'querystring';

import SERVER_URL from '../../utils/constants';

const ChatColumn = (props) =>{
    console.log(props.typing);
    const [pics, setPics] = useState([]);
    useEffect(async ()=>{
        let users = [];
        props.chats.forEach((chat)=>{
            users.push(chat.user);
        });
        console.log(users);
        const res = await axios.post(`${SERVER_URL}/getprofilepictures`, querystring.stringify({users:users}));
        const data = res.data;
        console.log(data);
        setPics(data);
    },[])
    function searchPic(user){
        for(let i=0;i<pics.length;i++)
        {
            if(pics[i].user === user){
                if(typeof pics[i].pic === 'undefined' || pics[i].pic === null)
                    return "/images/defaultPic.jpg";
                // if(pics[i].pic !== "" || pics[i].pic !== null)
                    return pics[i].pic;
                // else
                //     return "/images/defaultPic.jpg";
            }
        }
        return "/images/defaultPic.jpg";
    }
    function changeChat(evt){
        evt.preventDefault();
        props.changeCurrChat(evt.target.textContent);
    }
    function makeChatCard(user, ind){
        const srcImg = searchPic(user.user)
        return(
            <div key={user.user} value={user.user} className="chat-card" onClick={changeChat}>
                <div className="chat-user-img">
                    <img src={srcImg} onError={(e)=>{console.log("here"); e.target.onerror = null; e.target.src="/images/defaultPic.jpg"}} alt="dp"/>
                </div>
                <div className="chat-user-name">
                    {user.user}
                    <div className="typing">{user.user === props.typing?"Typing...":""}</div>
                </div>
            </div>
        )
    }
    return(
        <div className={`chat-column ${props.chatView && " hide"}`}>
            <h2 style={{textAlign:"center", borderBottom:"1px solid #dfdfdf", fontWeight:"800"}}>CHATS</h2>
            {props.chats.map(makeChatCard)}
        </div>
    )
}

export default ChatColumn;