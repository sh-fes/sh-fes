import React, { lazy } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from '../Components';
import { ArticleList } from '../Components/ArticleList';

const GroupRoute = (props: RouteComponentProps<{ groupID: string }>) => {
    const ArticleList2 = ArticleList({
        groupID: props.match.params.groupID,
        title: 'おすすめの記事',
    });
    const NotFoundPage = lazy(() => import('../pages/NotFound.page'));
    if (ArticleList2) return <Layout layout='index'>{ArticleList2}</Layout>;
    else return <NotFoundPage />;
};

export default GroupRoute;
