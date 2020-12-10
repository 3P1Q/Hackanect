import React from 'react';
// import chatc from './data';

const ChatColumn = (props) =>{
    function changeChat(evt){
        evt.preventDefault();
        props.changeCurrChat(evt.target.textContent);
    }
    function makeChatCard(user){
        return(
            <div key={user.user} value={user.user} className="chat-card" onClick={changeChat}>
                <div className="chat-user-img">
                    <img src="https://www.decentfashion.in/wp-content/uploads/2018/02/Cool-cool-profile-pictures-300x244.jpg" alt="dp"/>
                </div>
                <div className="chat-user-name">{user.user}</div>
            </div>
        )
    }
    return(
        <div className="chat-column">
            <h2 style={{textAlign:"center", borderBottom:"1px solid #dfdfdf", fontWeight:"800"}}>CHATS</h2>
            {props.chats.map(makeChatCard)}
        </div>
    )
}

export default ChatColumn;