import React, { useContext } from 'react';
// import Edit from './Edit';
import Edit from './Edit1';
import {Link} from 'react-router-dom';
import {userLoggedInContext} from '../App';
import {userDataContext} from './profilePage';

const Menu = (props) => {
    const [loggedIn,SetLoggedIn] = useContext(userLoggedInContext);
    const [data, setData] = useContext(userDataContext);
    return <div>
        <div className="menu">
            <ul>
                <li>Profile</li>
                <li><Link to="/connect" style={{textDecoration:"none", color:"inherit"}}>Connect</Link></li>
                {data.username===localStorage.getItem("username") && <li><Edit/></li>}                
                <li>Logout</li>
            </ul>
        </div>
    </div>
}

export default Menu;