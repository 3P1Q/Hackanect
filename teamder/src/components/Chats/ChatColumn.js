import React from 'react';
import chatc from './data';

const ChatColumn = () =>{
    function makeChatCard(user){
        return(
            <div className="chat-card">
                <div className="chat-user-img">
                    <img src={user.profilePic} alt="dp"/>
                </div>
                <div className="chat-user-name">{user.name}</div>
            </div>
        )
    }
    return(
        <div className="chat-column">
            <h2 style={{textAlign:"center", borderBottom:"1px solid #dfdfdf", fontWeight:"800"}}>CHATS</h2>
            {chatc.map(makeChatCard)}
        </div>
    )
}

export default ChatColumn;