import React from 'react';
import {chatData} from './data';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const Chat = (props) =>{
    // const chatData = props.chatData;
    const messages = chatData.messages;
    function makeMessage(msgData){
        return(
            <div className={`user-msg-container ${msgData.source!==chatData.user?"user-msg-container-right":""}`}>
                <div className={`user-msg ${msgData.source!==chatData.user?"user-msg-right":"user-msg-left"}`}>{msgData.message}</div>
            </div>
        )
    }
    return(
        <div className="chat">
            <div className="chat-header-user">
                {chatData.user}
            </div>
            <div className="chat-section">
                {messages.map(makeMessage)}
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
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    className="send-chat"
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon/>}
                >
                    Send
                </Button>
            </div>
        </div>
    )
}

export default Chat;