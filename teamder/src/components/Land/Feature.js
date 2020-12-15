import React from 'react';

const Feature = (props) => {
    return(
        <div className="feature">
            <div style={{textAlign:props.dir}} alt="feature" className="feature-content">
                <img src={props.src}></img>
                <h4>{props.text}</h4>
            </div>
        </div>
    )
}

export default Feature;