import React, { Component } from 'react';
import '../../styles/nav.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="navBar">
                    <li id="home">Home</li>
                    <li id="skills">Skills</li>
                    <li id="projects">Projects</li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default Navigation;