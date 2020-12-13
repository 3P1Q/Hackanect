import React, { useEffect, useState } from 'react';
import ChatColumn from './ChatColumn';
import Chat from './Chat';
import './Chat.css';

import axios from 'axios';
import querystring from 'querystring';

import SERVER_URL from '../../utils/constants';

import io from 'socket.io-client';

axios.defaults.withCredentials = true;

function ChatPage(){
    const [chats, setChats] = useState([]);
    const [load, setLoad] = useState(false);

    const [currChat, setCurrChat] = useState({});

    const [socket, setSocket] = useState();

    const [typing, setTyping] = useState(false);

    const username = localStorage.getItem("username");

    useEffect(() => {

        const newSocket = io("http://localhost:5000", { query: { username } });

        setSocket(newSocket);

        console.log(socket);

        return () => newSocket.close();
    }, [username])

    async function getChats() {
        // if(messageSend)
        // {
        //     const msgs = currChat.messages;
        //     msgs.push({source:localStorage.getItem("username"), message:newMessage});
        //     await axios.post("http://localhost:5000/updatechat", querystring.stringify({chatUser:currChat.user, messages:JSON.stringify(msgs)}));
        //     setNewMessage("");
        // }
        //console.log(currChat);
        const res = await axios.get(`${SERVER_URL}/getchats`);
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
    function changeCurrChat(userChat) {
        for (var i = 0; i < chats.length; i++) {
            if (chats[i].user === userChat) {
                setCurrChat(chats[i]);
                break;
            }
        }
    }

    //console.log(chats);
    //console.log(currChat);
    useEffect(async () => {
        // setLoad(false);
        await getChats();
        //console.log(chats);
        // const intervalId = setInterval(getChats, 1000);
        // return () => clearInterval(intervalId);
        // getChats();
    }, [])
    
    useEffect(()=>{
        if(socket == null)  return;

        console.log("use effect chala");

        socket.on('receive-message', async ({source,message,ts}) => {
            console.log("message received");
            //setTyping(false);
            // await getChats();
            var ind = -1;
            setChats((prev) => {
                const dat = prev;
                for(let i=0;i<dat.length;i++)
                {
                    if(dat[i].user === source)
                    {
                        dat[i].ts = ts;
                        dat[i].messages = [...dat[i].messages,{source:source, message:message}];
                        ind = i;
                        console.log("Match found!");

                        //console.log(dat);
                        break;
                    }
                }

                console.log(dat);
                return dat;
            });
            console.log(chats);
            // setCurrChat(chats[ind]);
            //console.log(chats);
            changeCurrChat(source);
        });
        return ()=>socket.off('receive-message');
    },[socket])


    return load ? (
        <div className="chat-page">
            <ChatColumn chats={chats} changeCurrChat={changeCurrChat} />
            <Chat
                socket={socket}
                chats={chats}
                setCurrChat={setCurrChat}
                currChat={typeof currChat.user === 'undefined' ? { user: "No user Selected", messages: [] } : currChat}
                typing={typing}
                setTyping={setTyping} />
        </div>
    ) : "Loading"
}

export default ChatPage;