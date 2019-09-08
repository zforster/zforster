import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/home';
import Skills from './components/pages/skills';
import Projects from './components/pages/projects';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component{
    render(){
        return(
            <Router basename={process.env.PUBLIC_URL} history={history}>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/skills"} exact component={Skills}/>
                <Route path={"/projects"} exact component={Projects}/>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));