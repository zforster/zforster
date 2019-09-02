import Name from './name';
import Navigation from './navbar';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Name welcomeText={"Zak Forster"} secondaryText={"Data Engineer"}/>
            </div>
        );
    }
}

export default Home;