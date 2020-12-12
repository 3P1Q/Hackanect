import React from 'react';
import Feature from './Feature';
import './Land.css'
import Fade from 'react-reveal/Fade';

const Home =() =>{
    return (
        <div style={{overflow:"hidden"}}>
            <div className="oval-back">
                <div className="oval-content">
                    <div className="oval-head">
                        <h1>Meet and Collaborate with other Techies</h1>
                        <h4>based on your skillset and interests</h4>
                    </div>
                    <img className="teampic" src="/images/teampic.svg"></img>
                </div>
                
            </div>

            <Fade bottom>
            <Feature 
                src="/images/hackathon.svg"
                dir="left"
                text="Looking to team up with someone for a Hackathon? Register yourself, explore other users participating in the same hackathon, or we will match you up !"
            />
            </Fade>

            <Fade bottom>
            <Feature 
                src="/images/skills.svg"
                dir="right"
                text="Mention the Tech stack you work with, your skill set and get connected with people like you"
            />
            </Fade>

            <Fade bottom>
            <Feature 
                src="/images/random.svg"
                dir="left"
                text="Not interested in meeting someone like you ? :P 
                No Problem ! Meet someone randomly and collaborate"
            />
            </Fade>

            <div className="oval-back">
                <div className="oval-content oval-content-2">
                    <div className="oval-signin">
                        <h1>Already a User ? </h1>
                        <a href="/login" className="sign-button"on>Sign In Here</a>
                    </div>
                    <div className="oval-signin">
                        <h1>New to Teamder ?</h1>
                        <a type="button" href="/register" className="sign-button">Register here</a>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home;