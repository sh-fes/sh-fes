import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import { Home, Products, Reports } from './pages';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/reports' component={Reports} />
                <Route path='/products' component={Products} />
            </Switch>
        </Router>
    );
}

export default App;
