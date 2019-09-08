import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/home';
import Skills from './components/pages/skills';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends Component{
    render(){
        return(
            <Router history={history}>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/skills"} exact component={Skills}/>
                <Route path={"/projects"} exact component={Skills}/>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));