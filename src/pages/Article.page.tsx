import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { GetArticleQuery } from '../API';
import { ArticleTemplate } from '../Components';
import { getArticle } from '../graphql/queries';

interface Props extends RouteComponentProps<{ id: string }> {}

const Article = (props: Props) => (
    <ArticleTemplate
        q={useQuery<GetArticleQuery>(gql(getArticle), {
            variables: { id: props.match.params.id },
        })}
    />
);

export default Article;
