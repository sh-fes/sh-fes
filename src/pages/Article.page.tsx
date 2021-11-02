import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { lazy } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ArticleByArticleIDQueryVariables } from '../API';
import { ArticleRenderer } from '../Components/Article/Article';
import { defaultClient } from '../GraphqlClient';
import { ArticleByArticleIDQuery } from '../types';

const ArticleRoute = (props: RouteComponentProps<{ articleID: string }>) => {
    const GraphqlArticleByArticleID = `query LA($articleID:ID!){ArticleByArticleID(articleID:$articleID,limit:1,sortDirection:DESC){items{id,articleID,title,content,tags,thumb,author,createdAt,groupID,isActive,updatedAt,group{items{id,groupID,groupName,groupKind,tags,icon,thumb,author,createdAt,isActive,updatedAt}},recommend{items{id,articleID,title,tags,thumb,author,createdAt,isActive,updatedAt},nextToken}}}}`;
    const { loading, data } = useQuery<ArticleByArticleIDQuery, ArticleByArticleIDQueryVariables>(
        gql(GraphqlArticleByArticleID),
        { client: defaultClient, variables: { articleID: props.match.params.articleID } },
    );
    const article = new ArticleRenderer();
    if (loading) article.update({ isLoading: 'loading' });
    else if (data && data.ArticleByArticleID.items.length > 0)
        article.update({ article: data.ArticleByArticleID.items[0], isLoading: 'loaded' });
    else article.update({ isLoading: 'notfound' });
    const render = article.render();
    const NotFoundPage = lazy(() => import('../pages/NotFound.page'));
    if (render) return render;
    else return <NotFoundPage />;
};

export default ArticleRoute;
