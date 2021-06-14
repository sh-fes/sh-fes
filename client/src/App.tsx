import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.module.scss';
import { Header, Navigation } from './Components';
import { Article, IndexPage, Top } from './pages';

interface Props {}
interface States {}

class App extends Component<Props, States> {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={Top} />
                    <Route path='/index' component={IndexPage} />
                    <Route path='/article' component={Article} />
                </Switch>
                <Navigation />
            </Router>
        );
    }
}

export default App;
