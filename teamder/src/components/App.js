import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './Profile/Profile.css';
import Navbar from './Navbar/Navbar'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProfilePage from './Profile/profilePage'
import Home from './Land/Home'
import Hackathon from './Hackathon/Hackathon';

import Error404 from './Error404';
import Google from './OAuth/Google';
import Github from './OAuth/Github';

import axios from 'axios';
import SERVER_URL from '../utils/constants';
import SearchBar from './Search/SearchBar';
import UserSelector from './Profile/UserSelector';
import ChatPage from './Chats/ChatPage';

axios.defaults.withCredentials = true;

const userLoggedInContext = React.createContext([Boolean, ()=>Boolean]);


const App = () => {
  
  // const login = false;
  const [loggedIn, setLoggedIn] = useState(false);
  const [logwait, setLogWait] = useState(true);
  // console.log(loggedIn);

  const getLogStatus = () => {
    return axios.post(`${SERVER_URL}/loggedin`);
  }

  useEffect(()=>{
    async function userLogInStatus() {
      const logStatus = await getLogStatus();
      // console.log(logStatus);
      setLoggedIn(logStatus.data);
      setLogWait(false)
      // return logStatus.data;
    }
    userLogInStatus();
  },[])

  // console.log(loggedIn);

    return (
      <userLoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Navbar />
        <Switch>

          <Route 
            path="/profile/:username" 
            render={(props)=>logwait?(<img className="loader" alt="loader" src="/gifs/loader.gif" />)
            :(loggedIn?(
            <ProfilePage routerProps={props}/>
            )
            :(<Redirect to="/login" />))
          } />

          <Route 
            exact
            path="/profile" 
            render={()=>logwait?("Loading")
            :(loggedIn?(
            <UserSelector />
            )
            :(<Redirect to="/login" />))
          } />

          <Route path='/' exact>
            <Home />
          </Route>

          <Route 
            path="/login" 
            render={
              () => <Login/>
            } />

          <Route 
            path="/register"
            render={
              () => <Register/>
            } />

          <Route 
            path="/hackathons" 
            render={
              () => <Hackathon/>
            } />

            <Route 
            path="/chats" 
            render={(props)=>logwait?(<img className="loader" alt="loader" src="/gifs/loader.gif" />)
            :(loggedIn?(
            <ChatPage/>
            )
            :(<Redirect to="/login" />))
          } />

            <Route 
            path="/connect" 
            render={(props)=>logwait?(<img className="loader" alt="loader" src="/gifs/loader.gif" />)
            :(loggedIn?(
            <SearchBar/>
            )
            :(<Redirect to="/login" />))
          } />

            <Route 
            path="/google/login/:username" 
            render={(props)=> <Google routerProps={props}/>} />

          <Route 
            path="/github/login/:username" 
            render={(props)=> <Github routerProps={props}/>} />

          <Route
            path=""
            component={Error404}
          />

        </Switch>
      </Router>
      </userLoggedInContext.Provider>
    );
}

export default App;
export {userLoggedInContext};
