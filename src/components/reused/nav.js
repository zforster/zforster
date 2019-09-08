import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../styles/nav.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul className="navBar">
                    <li id="home"><Link className="noDecoration" to="/">Home</Link></li>
                    <li id="skills"><Link className="noDecoration" to="/skills">Skills</Link></li>
                    <li id="projects"><Link className="noDecoration" to="/projects">Projects</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default Navigation;