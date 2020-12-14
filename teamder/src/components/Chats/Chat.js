import React, { useState, useEffect, useRef, useLayoutEffect} from 'react';
import {chatData} from './data';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import axios from 'axios';
import querystring from 'querystring';

import SERVER_URL from '../../utils/constants';

axios.defaults.withCredentials = true;

function Chat(props){
    const [newMessage, setNewMessage] = useState("");

    async function sendMessages(msgs){
        await axios.post(`${SERVER_URL}/updatechat`, querystring.stringify({chatUser:props.currChat.user, messages:JSON.stringify(msgs)}));
    }

    function composeMessage(msg){
        if(newMessage === '')
            return;

        const msgs = props.currChat.messages;
        msgs.push({source:localStorage.getItem("username"), message:newMessage});
        
        props.socket.emit('send-message',{
            chatUser: props.currChat.user,
            message: newMessage
        });

        setNewMessage("");
        sendMessages(msgs);
    }

    function writingMessage(e){
        setNewMessage(e.target.value);
        props.socket.emit('typing',{chatUser: props.currChat.user, typed: e.target.value});
    }

    function makeMessage(msgData){
        return(
            <div className={`user-msg-container ${msgData.source!==props.currChat.user?"user-msg-container-right":""}`}>
                <div className={`user-msg ${msgData.source!==props.currChat.user?"user-msg-right":"user-msg-left"}`}>{msgData.message}</div>
            </div>
        )
    }

    function backButtonPressed(){
        props.setChatView(false);
    }

    const ref = useRef(null);

    useLayoutEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
    }, [props.currChat]);
    return !props.currChat?("Loading"):(
        <div className={`chat ${!props.chatView && " hide"}`}>
            <div className="chat-header-user">
                <ArrowBackIcon onClick={backButtonPressed} className="back-to-all-chats"/>
                {props.currChat.user}
                <span className="typing">{props.typing?" Typing... ":""}</span>
            </div>
            <div ref={ref} className="chat-section">
                {props.currChat.messages.map(makeMessage)}
            </div>
            <div className="compose-section">
                <TextField
                    className="type-chat"
                    id="standard-full-width"
                    style={{ margin: 0 }}
                    placeholder="Type your message here"
                    fullWidth
                    multiline
                    margin="normal"
                    value={newMessage}
                    onChange={writingMessage}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    className="send-chat"
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon/>}
                    // onClick={(e)=>{props.setMessageSend(e.target.value)}}
                    onClick={composeMessage}
                >
                    Send
                </Button>
            </div>
        </div>
    )
}

export default Chat;