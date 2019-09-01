import React, { Component } from 'react';
import '../styles/title.css'

class Title extends Component {
    render() {
        return (
            <div className="containingDiv">
                <div className="flex">
                    <h1 className="title">{this.props.title}</h1>
                </div>
                <h1 className="subtitle">{this.props.subtitle}</h1>
            </div>
        );
    }
}

export default Title;