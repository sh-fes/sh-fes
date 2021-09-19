import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { Article } from '../../types';
import Style from './Article.template.module.scss';
import { MarkdownConverter } from './Markdown';

interface Props {
    article: Article;
}
interface States {}

class ArticleTemplate extends Component<Props, States> {
    render() {
        const { article } = this.props;
        return (
            <>
                <Helmet>
                    <title>{article.title}</title>
                </Helmet>
                <article className={Style.Container}>
                    <MarkdownConverter className={Style.Article} content={article.content} />
                </article>
            </>
        );
    }
}

export default ArticleTemplate;
