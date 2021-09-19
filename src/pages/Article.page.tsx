import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ArticleByArticleIDQueryVariables } from '../API';
import { ArticleTemplate, Layout } from '../Components';
import { defaultClient } from '../GraphqlClient';
import { ArticleByArticleIDQuery } from '../types';

const ArticlePage = (props: RouteComponentProps<{ id: string }>) => {
    const GraphqlArticleByArticleID = `query LA($articleID:ID!){ArticleByArticleID(articleID:$articleID,limit:1,sortDirection:DESC){items{id,articleID,title,content,tags,thumb,author,createdAt,groupID,isActive,updatedAt,group{items{id,groupID,groupName,groupKind,tags,icon,thumb,author,createdAt,isActive,updatedAt}},recommend{items{id,articleID,title,tags,thumb,author,createdAt,isActive,updatedAt},nextToken}}}}`;
    const { loading, data } = useQuery<ArticleByArticleIDQuery, ArticleByArticleIDQueryVariables>(
        gql(GraphqlArticleByArticleID),
        { client: defaultClient, variables: { articleID: props.match.params.id } },
    );
    if (loading)
        return (
            <Layout layout='article'>
                <p>Loading...</p>
            </Layout>
        );
    if (data && data.ArticleByArticleID.items.length > 0)
        return (
            <Layout layout='article'>
                <ArticleTemplate article={data.ArticleByArticleID.items[0]} />
            </Layout>
        );
    return <Layout layout='notfound' />;
};

export default ArticlePage;
