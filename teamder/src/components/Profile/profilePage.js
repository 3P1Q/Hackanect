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

import SERVER_URL from '../../utils/constants';

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
        axios.post(`${SERVER_URL}/getuserdata`, querystring.stringify({username: props.routerProps.match.params.username}), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        credentials: 'include',
        withCredentials: true
      })
      .then(res => res.data)
      .then(data => {
        console.log(data);
          setData(data);
          setLoad(true);
      })    
    },[props.routerProps.match.params.username])

    useEffect(()=>{
          axios.post(`${SERVER_URL}/profile/edit`, querystring.stringify(data), {
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
    
    return !load?<img className="loader" src="/gifs/loader.gif" />:(
      typeof data.username === 'undefined'?<h1 style={{textAlign:"center"}}>User does not exist</h1>:(
        <userDataContext.Provider value={[data, setData]}>
        <div className="fullpage">


            <div className="topsection">
                <div className="name-avatar-container">
                  <NameAndAvatar 
                    myname={data.name || "Your Name"}
                    style={{minWidth:"300px"}} className="NaA"  
                    src={data.profilePic} name="Random User"
                  />
                </div>

                <div className="bio-container">
                    <Bio 
                    description={data.description} 
                    facebook={data.social? data.social.facebook :"#"} 
                    github={data.social ? data.social.github : "#"}
                    twitter={data.social ? data.social.twitter :"#"} 
                    linkedin={data.social ? data.social.linkedin : "#"}
                    />
                </div>
            </div>


            <div className="bottomsection">    
                <div className="menu-container">
                  <Menu className="menu"/>
                </div>
                <div className="content-container">
                    {/* <div className="tech-and-projects"> */}
                        <TechStack className="stack" tags={data.techStack || []}/>
                        <ProjectCards className="projects" deets={data.projects || []}/>
                    {/* </div> */}
                </div>
                
            </div>
        </div>
        </userDataContext.Provider>
    ));
}

export default ProfilePage ;
export {userDataContext};