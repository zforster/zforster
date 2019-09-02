import profileImage from "../resources/profile_image.png"
import React, { Component } from 'react';
import '../styles/name.css';

class Name extends Component {
    render() {
        return (
            <div className="nameContainer">
                <img src={profileImage}/>
                <h1>{this.props.welcomeText}</h1>
                <h2>{this.props.secondaryText}</h2>
            </div>
        );
    }
}

export default Name;