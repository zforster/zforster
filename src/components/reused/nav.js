import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../styles/nav.css';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul className="navBar">
                    <li><NavLink exact className="link" activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink exact className="link" activeClassName="active" to="/projects">Projects</NavLink></li>
                    {/*<li><NavLink exact className="link" activeClassName="active" to="/skills">Skills</NavLink></li>*/}
                </ul>
                {this.props.children}
            </nav>
        );
    }
}

export default Navigation;