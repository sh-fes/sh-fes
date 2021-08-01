import React, { Component } from 'react';
import { ArticleLayout, ArticleTemplate } from '../Components';

interface Props {
    articleId: number
}
interface States { }

class Article extends Component<Props, States> {
    render() {
        return (
            <>
                <ArticleLayout title='Article Page'>
                    <ArticleTemplate articleId={this.props.articleId} />
                </ArticleLayout>
            </>
        );
    }
}

export default Article;
