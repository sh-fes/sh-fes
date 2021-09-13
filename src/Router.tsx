import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.module.scss';
import Layout from './Components/Layout/Layout';
import { AdminUI, Article, IndexPage, Top } from './pages';

export const MainRouter = () => (
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
                <Route path={'/article/:id'} component={Article} />
            </Layout>
        </Route>
        <Route path={['/admin']}>
            <Route path={'/admin'} component={AdminUI} />
        </Route>
        <Redirect path='/article' to='/' />
        <Route path={'*'}>
            <Layout layout={'notfound'} />
        </Route>
    </Switch>
);
