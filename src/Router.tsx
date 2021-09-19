import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.module.scss';
import Layout from './Components/Layout/Layout';
import { AdminUI, ArticlePage, IndexPage, Top } from './pages';

const TopRoute = () => {
    return (
        <Layout layout='top'>
            <Top />
        </Layout>
    );
};
const IndexRoute = () => {
    return (
        <Layout layout='index'>
            <IndexPage />
        </Layout>
    );
};

export const MainRouter = () => {
    return (
        <Switch>
            <Route path={['/']} exact component={TopRoute} />
            <Route path={['/index', '/index/:id']} component={IndexRoute} />
            <Route path={['/article/:id']} component={ArticlePage} />
            <Redirect path='/article' to='/' />
            <Route path={['/admin']} component={AdminUI} />
            <Route path={'*'}>
                <Layout layout={'notfound'} />
            </Route>
        </Switch>
    );
};
