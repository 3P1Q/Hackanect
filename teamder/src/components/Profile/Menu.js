import React from 'react';
import Edit from './Edit';

const Menu = (props) => {
    return <div>
        <div className="menu">
            <ul>
                <li>Profile</li>
                <li>Connect</li>
                <li><Edit/></li>
                <li>Logout</li>
            </ul>
        </div>
    </div>
}

export default Menu;