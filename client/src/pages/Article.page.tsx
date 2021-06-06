import React, { Component } from 'react';
import { ArticleLayout, ArticleTemplate } from '../Components';
import { SampleText2 as content } from '../sample/';

interface Props {}
interface States {}

class Article extends Component<Props, States> {
    render() {
        return (
            <>
                <ArticleLayout title='Article Page'>
                    <ArticleTemplate content={content} />
                </ArticleLayout>
            </>
        );
    }
}

export default Article;
