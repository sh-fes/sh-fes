import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.module.scss';

const TopRoute = lazy(() => import('./Top.page'));
const AdminUI = lazy(() => import('./AdminUI.page'));
const ArticleRoute = lazy(() => import('./Article.page'));
const GroupRoute = lazy(() => import('./Group.page'));
const NotfoundRoute = lazy(() => import('./NotFound.page'));

export const Router = () => {
    const fallback = <></>;
    return (
        <Suspense fallback={fallback}>
            <Switch>
                <Route path={['/']} exact component={TopRoute} />
                <Route path={['/group/:groupID']} component={GroupRoute} />
                <Route path={['/article/:articleID']} component={ArticleRoute} />
                <Route path={['/admin']} component={AdminUI} />
                <Route path={'*'} component={NotfoundRoute} />
            </Switch>
        </Suspense>
    );
};
