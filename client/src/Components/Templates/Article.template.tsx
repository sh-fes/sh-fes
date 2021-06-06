import React, { Component } from 'react';
import Style from './Article.template.module.scss';
import { MarkdownConverter } from './Markdown';

interface Props {
    content?: string;
}
interface States {}

class ArticleTemplate extends Component<Props, States> {
    render() {
        return (
            <>
                <article className={Style.Container}>
                    <MarkdownConverter
                        className={Style.Article}
                        content={this.props.content ?? ''}
                    />
                </article>
            </>
        );
    }
}

export default ArticleTemplate;
