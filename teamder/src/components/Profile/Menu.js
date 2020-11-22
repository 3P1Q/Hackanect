import React, { useContext } from 'react';
import Edit from './Edit';

import {userLoggedInContext} from '../App';
import {userDataContext} from './profilePage';

const Menu = (props) => {
    const [loggedIn,SetLoggedIn] = useContext(userLoggedInContext);
    const [data, setData] = useContext(userDataContext);
    return <div>
        <div className="menu">
            <ul>
                <li>Profile</li>
                <li>Connect</li>
                {data.username===localStorage.getItem("username") && <li><Edit/></li>}                
                <li>Logout</li>
            </ul>
        </div>
    </div>
}

export default Menu;