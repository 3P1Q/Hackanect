import React, { useEffect, useState } from 'react';
import ChatColumn from './ChatColumn';
import Chat from './Chat';
import './Chat.css';

import axios from 'axios';
import querystring from 'querystring';
axios.defaults.withCredentials = true;

const ChatPage = () => {
    const [chats, setChats] = useState([]);
    const [load, setLoad] = useState(false);

    const [currChat, setCurrChat] = useState({});

    const [newMessage, setNewMessage] = useState("");
    const [messageSend, setMessageSend] = useState(false);

    async function getChats(){
        // if(messageSend)
        // {
        //     const msgs = currChat.messages;
        //     msgs.push({source:localStorage.getItem("username"), message:newMessage});
        //     await axios.post("http://localhost:5000/updatechat", querystring.stringify({chatUser:currChat.user, messages:JSON.stringify(msgs)}));
        //     setNewMessage("");
        // }
        //console.log(currChat);
        const res = await axios.get("http://localhost:5000/getchats");
        const data = res.data;
        setChats(data);
        setLoad(true);
        for(var i=0;i<data.length;i++)
                {
                    //console.log(data[i]);
                    if(data[i].user === currChat.user)
                    {
                        // setCurrChat(data[i]);
                        // break;
                        //console.log("FOUND DATA");
                        setCurrChat(data[i]);
                    }
                }
    }
    //console.log(currChat);
    function changeCurrChat(userChat){
        for(var i=0;i<chats.length;i++)
        {
            if(chats[i].user === userChat)
            {
                setCurrChat(chats[i]);
                break;
            }
        }
    }
    //console.log(currChat);
    useEffect(()=>{
        // setLoad(false);
        const intervalId = setInterval(getChats,1000);
        return () => clearInterval(intervalId);
        // getChats();
    },[])
    return load?(
        <div className="chat-page">
            <ChatColumn chats={chats} changeCurrChat={changeCurrChat}/>
            <Chat 
                chats={chats}
                setCurrChat={setCurrChat}
                currChat={typeof currChat.user === 'undefined' ?{user:"No user Selected", messages:[]}:currChat}/>
        </div>
    ):"Loading"
}

export default ChatPage;