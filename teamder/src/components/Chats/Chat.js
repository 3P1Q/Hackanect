import React, { useState, useEffect, useRef, useLayoutEffect} from 'react';
import {chatData} from './data';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import axios from 'axios';
import querystring from 'querystring';

import SERVER_URL from '../../utils/constants';

axios.defaults.withCredentials = true;

function Chat(props){
    //console.log(props);
    const [newMessage, setNewMessage] = useState("");
    async function sendMessages(msgs){
        console.log("ye chala tha");
        await axios.post(`${SERVER_URL}/updatechat`, querystring.stringify({chatUser:props.currChat.user, messages:JSON.stringify(msgs)}));

    }

    function composeMessage(msg){
        console.log("chal pada");
        const msgs = props.currChat.messages;
        console.log(newMessage);
        msgs.push({source:localStorage.getItem("username"), message:newMessage});
        
        props.socket.emit('send-message',{
            chatUser: props.currChat.user,
            message: newMessage
        });

        setNewMessage("");
        sendMessages(msgs);
    }

    
    useEffect(()=>{
        props.socket.on('typing-received',({source, typed})=>{
            if(typed === "")
            {
                props.setTyping(false);
            }
            else
            {
                if(props.currChat.user === source)
                    props.setTyping(true);
            }
        })
    },[props.socket])

    useEffect(()=>{
        console.log("CHAT changed");
        //console.log(props.chats);
    },[props.chats])

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

    // useEffect(async ()=>{
    //     const res = await axios.post(`${SERVER_URL}/getcurrentchat`, querystring.stringify({chatUser: props.currChat.user}));
    //     const data = res.data;
    //     props.setCurrChat(data);
    // },[props.chats])

    // const ref = useRef(null);

    // useLayoutEffect(() => {
    //     ref.current.scrollTop = ref.current.scrollHeight;
    // }, []);
    return !props.currChat?("Loading"):(
        <div className="chat">
            <div className="chat-header-user">
                {props.currChat.user}
                <span id="typing">{props.typing?" Typing... ":""}</span>
            </div>
            <div className="chat-section">
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