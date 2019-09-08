import profileImage from "../../resources/profile_image.png"
import React, { Component } from 'react';
import '../../styles/name.css';
import ScrambleText from "./scrambleText"

class Name extends Component {
    render() {
        return (
            <div className="nameContainer">
                <img className="profileImage" src={profileImage}/>
                <h1>{this.props.welcomeText}</h1>
                <ScrambleText phrases={['Hello & Welcome!', 'Schroders Technology Placement Student', 'Data Engineer', 'Computer Science Undergraduate', 'Programmer!']}/>
            </div>
        );
    }
}

export default Name;