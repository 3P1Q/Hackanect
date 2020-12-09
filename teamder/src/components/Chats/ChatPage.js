import React from 'react';
import ChatColumn from './ChatColumn';
import Chat from './Chat';
import './Chat.css';

const ChatPage = () => {
    return(
        <div className="chat-page">
            <ChatColumn />
            <Chat />
        </div>
    )
}

export default ChatPage;