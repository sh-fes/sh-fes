import { Component } from 'react';
import { default as content } from '../../sample/SampleText';
import { MarkdownConverter } from './Markdown';

interface Props {}
interface States {}

class ArticleTemplate extends Component<Props, States> {
    render() {
        return (
            <>
                <MarkdownConverter content={content} />
            </>
        );
    }
}

export default ArticleTemplate;
