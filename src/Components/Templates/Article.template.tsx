import { OperationVariables, QueryResult } from '@apollo/client';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { GetArticleQuery } from '../../API';
import { GlobalDispatchContext } from '../../Global';
import Style from './Article.template.module.scss';
import { MarkdownConverter } from './Markdown';

interface Props {
    q: QueryResult<GetArticleQuery, OperationVariables>;
}
interface States {}

class ArticleTemplate extends Component<Props, States> {
    static contextType = GlobalDispatchContext;
    context!: React.ContextType<typeof GlobalDispatchContext>;
    goNotFound() {
        const dispatch = this.context;
        if (dispatch) dispatch({ type: 'SET_Notfound', payload: true });
    }
    render() {
        const { loading, error, data } = this.props.q;
        if (loading) return <p>Loading...</p>;
        if (error) return <p>{error.message}</p>;
        if (data?.getArticle)
            return (
                <>
                    <Helmet>
                        <title>{data.getArticle.title ?? 'undefined'}</title>
                    </Helmet>
                    <article className={Style.Container}>
                        <MarkdownConverter className={Style.Article} content='' />
                    </article>
                    <p>{data.getArticle.title}</p>
                </>
            );
        else this.goNotFound();
        return null;
    }
}

export default ArticleTemplate;
