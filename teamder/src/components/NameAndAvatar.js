import React from 'react';
import {Container, Avatar} from '@material-ui/core';
import './Profile.css';

const NameAndAvatar = (props) => {
    function getInitials(name)
    {
        var initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }
    return <div className="name-and-avatar">
        <div className="avatar-container">
            {props.src === "" ? <Avatar className="avatar">{getInitials(props.name)}</Avatar> : <Avatar className="avatar" alt={props.name} src={props.src} />}
        </div>
        <div className="name-container">
            <h1> {props.name} </h1>
        </div> 
    </div>
}

export default NameAndAvatar;