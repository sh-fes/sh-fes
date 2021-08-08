import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.module.scss';
import { BackgroundImage, Header, Navigation } from './Components';
import Layout from './Components/Layout/Layout';
// import { Header } from './Components';
import { Article, IndexPage, Top } from './pages';

interface Props {}
interface States {}

class App extends Component<Props, States> {
    render() {
        return (
            <Router>
                <Header />
                <BackgroundImage />
                <Switch>
                    <Route path={['/']} exact>
                        <Layout layout={'top'}>
                            <Top />
                        </Layout>
                    </Route>
                    <Route path={['/index', '/index/:id']}>
                        <Layout layout={'index'}>
                            <IndexPage />
                        </Layout>
                    </Route>
                    <Route path={['/article/:id']}>
                        <Layout layout={'article'}>
                            <Article />
                        </Layout>
                    </Route>
                    <Redirect path='/article' to='/' />
                </Switch>
                <Navigation />
            </Router>
        );
    }
}

export default App;
