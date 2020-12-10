import React, { useContext, useEffect, useState } from 'react';
import ProjectCards from '../ProjectCards/ProjectCards';
import NameAndAvatar from './NameAndAvatar';
import TechStack from './TechStack';
import Menu from './Menu';
import Bio from './Bio';
import NewChat from './NewChat';
import {Typography} from '@material-ui/core';
import axios from 'axios';

import querystring from 'querystring';

import './Profile.css'

import {userLoggedInContext} from '../App';
import { Redirect } from 'react-router-dom';

axios.defaults.withCredentials = true;

const userDataContext = React.createContext([{}, ()=>{}]);

function ProfilePage(props){

    // console.log(localStorage.getItem('username'));
    // console.log(props.routerProps.match.params.username);
    

    const [data, setData] = useState({});
    const [load, setLoad] = useState(false);
    useEffect(()=>{
        axios.post("http://localhost:5000/getuserdata", querystring.stringify({username: props.routerProps.match.params.username}), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        credentials: 'include',
        withCredentials: true
      })
      .then(res => res.data)
      .then(data => {
          setData(data);
          setLoad(true);
      })    
    },[props.routerProps.match.params.username])

    useEffect(()=>{
            console.log(data);
          axios.post("http://localhost:5000/profile/edit", querystring.stringify(data), {
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            credentials: 'include',
            withCredentials: true
          })
          .then(res => {
            if(res.status === 200)
            {
              console.log("updated");
            }
          });
          
      }, [data])

    console.log(data);
    
    return !load?"Loading":(
        <userDataContext.Provider value={[data, setData]}>
        <div className="fullpage" style={{display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
            <div className="topsection" style={{display:"flex", flexDirection:"row"}}>
                <div className="name-avatar-container"><NameAndAvatar myname={data.name || "Your Name"} style={{minWidth:"300px"}} className="NaA"  src={data.profilePic} name="Random User"/><NewChat user={data.username}/></div>
                    <Bio description={data.description} 
                    facebook={data.social? data.social.facebook :"#"} 
                    github={data.social ? data.social.github : "#"}
                    twitter={data.social ? data.social.twitter :"#"} 
                    linkedin={data.social ? data.social.linkedin : "#"}/>
            </div>
            <div className="bottomsection" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>    
                <div className="menu-container"><Menu className="menu"/></div>
                <div className="content-container">
                    <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", minWidth:"60vw"}}>
                        <TechStack className="stack" tags={data.techStack || []}/>
                        <ProjectCards className="projects" deets={data.projects || []}/>
                    </div>
                </div>
                
            </div>
        </div>
        </userDataContext.Provider>
    );
}

export default ProfilePage ;
export {userDataContext};