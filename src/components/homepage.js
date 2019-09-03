import Name from './name';
import Navigation from './navbar';
import GitHub from './footer';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Name welcomeText={"Zak Forster"} secondaryText={"Data Engineer"}/>
                <GitHub/>
            </div>
        );
    }
}

export default Home;