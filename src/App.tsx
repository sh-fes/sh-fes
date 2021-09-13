import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.module.scss';
import { BackgroundImage, Header, Navigation } from './Components';
import { MainRouter } from './Router';

interface Props {}
interface States {}

class App extends Component<Props, States> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={['/admin']}></Route>
                    <Route path={'*'}>
                        <Header />
                    </Route>
                </Switch>
                <BackgroundImage />
                <MainRouter />
                <Navigation />
            </Router>
        );
    }
}

export default App;
