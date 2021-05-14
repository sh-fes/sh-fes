import Markdown from 'markdown-to-jsx';
import React, { Component } from 'react';
import options from './markdown.option';

interface Props {
    content: string;
    className: string;
}
interface States {}

class MarkdownConverter extends Component<Props, States> {
    render() {
        return (
            <>
                <Markdown className={this.props.className} options={options}>
                    {this.props.content}
                </Markdown>
            </>
        );
    }
}

export default MarkdownConverter;
