import React, { Component } from 'react';
import '../styles/nav.css';

class Navigation extends Component {
    render() {
        return (
            <ul className="navBar">
                <li id="home">Home</li>
                <li id="skills">Key Skills</li>
                <li id="projects">Projects</li>
            </ul>
        );
    }
}

export default Navigation;