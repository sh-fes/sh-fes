import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.module.scss';
import { BackgroundImage, Navigation } from './Components';
import { Router as MainRouter } from './pages';

interface Props {}
interface States {}

class App extends Component<Props, States> {
    render() {
        return (
            <Router>
                <BackgroundImage />
                <MainRouter />
                <Navigation />
            </Router>
        );
    }
}

export default App;
