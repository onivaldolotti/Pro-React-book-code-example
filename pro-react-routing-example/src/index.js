import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Home from './Home';
import Repos from './Repos';
import './index.css';
import { BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>App</header>
                    <menu>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/repos">Repos</Link></li>
                        </ul>
                    </menu>
                    {this.props.children}
                </div>
                <Switch>
                    <Route path="/" component={App}>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/repos">
                            <Repos/>
                        </Route>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));