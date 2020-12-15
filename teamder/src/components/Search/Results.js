import React from "react";
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom';
import "./Results.css";
import Fade from 'react-reveal/Fade';

const Results = (props) => {

  function getInitials(name) {
    var initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return initials;
  }
  function makeTag(tag, ind) {
    if(ind<9)
        return <span className="result-user-tag">{tag}</span>
    
    else if(ind === 9)
    return <span className="result-user-tag">...more</span>
  }
  
  function viewUser(user) {
    return (
        <Fade bottom>
        <div className="result-user-profile">
            <div className="result-user">
            <div className="result-avatar">
                {user.src === null ? (
                <Avatar className="result-avatar">{getInitials(user.name)}</Avatar>
                ) : (
                <Avatar className="result-avatar yo" alt={user.name} src={user.src} />
                )}
            </div>
            <h1>{user.name!=null?(user.name.length<25?user.name:user.name.slice(0,24)+"..."):"No Name"}</h1>
            </div>
            <div className="result-user-tech-stack">
            <h3 style={{ marginBottom: "1%" }}>Tech Stack</h3>
            {user.techStack.map(makeTag)}
            </div>
            <Link style={{color:"inherit"}} to={`/profile/${user.username}`}>View Profile</Link>
        </div>
        </Fade>
    );
  }
  
  return <div className="similar-users">{typeof props.results!== 'undefined' && (props.results.length!==0 ? (
    props.results.map(viewUser)):(
       <h1>{props.resultMessage}</h1>)
  )}</div>;
};

export default Results;
