import Name from '../reused/name';
import Navigation from '../reused/nav';
import SiteLinks from '../reused/externalSites';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <Navigation>
                <Name welcomeText={"Zak Forster"} secondaryText={"Data Engineer"}/>
                <SiteLinks/>
            </Navigation>
        );
    }
}

export default Home;