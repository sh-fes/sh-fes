import React, { Component } from 'react';
import { default as content } from '../../sample/SampleText2';
import Style from './Article.template.module.scss';
import { MarkdownConverter } from './Markdown';

interface Props {}
interface States {}

class ArticleTemplate extends Component<Props, States> {
    render() {
        return (
            <>
                <main className={Style.Container}>
                    <MarkdownConverter
                        className={Style.Article}
                        content={content}
                    />
                </main>
            </>
        );
    }
}

export default ArticleTemplate;
