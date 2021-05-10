import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.module.scss';
import { Header, Navigation } from './Components';
import { Home, Products, Reports } from './pages';

interface Props {}
interface States {}

class App extends Component<Props, States> {
    render() {
        return (
            <Router>
                <Header />
                <Navigation />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/reports' component={Reports} />
                    <Route path='/products' component={Products} />
                </Switch>
            </Router>
        );
    }
}

export default App;
