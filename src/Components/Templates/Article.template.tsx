import { gql, useQuery } from '@apollo/client';
import React, { Component } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GetArticleQuery } from '../../API';
import { getArticle } from '../../graphql/queries';
import Style from './Article.template.module.scss';
import { MarkdownConverter } from './Markdown';
interface Props {
    articleId: number
}
interface States { }

function CheckParams() {
    const { id } = useParams<{ id: string | undefined }>();
    if (!id) return <Redirect to={'/'} />
    if (isNaN(parseInt(id))) return <Redirect to={'/'} />
    return <Query articleId={parseInt(id)} />
}
function Query({ articleId }: { articleId: number }) {
    const { error, loading, data } = useQuery<GetArticleQuery>(gql(getArticle), { variables: { id: articleId } })
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    return <p>{data?.getArticle?.title}</p>
}
class ArticleTemplate extends Component<Props, States> {
    render() {
        return (
            <>
                <article className={Style.Container}>
                    <MarkdownConverter
                        className={Style.Article}
                        content=''
                    />
                    <CheckParams />
                </article>
            </>
        );
    }
}

export default ArticleTemplate;