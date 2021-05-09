import Markdown from 'markdown-to-jsx';
import React, { Component } from 'react';
import options from './markdown.option';

interface Props {
    content: string;
}
interface States {}

class MarkdownConverter extends Component<Props, States> {
    render() {
        return <Markdown options={options}>{this.props.content}</Markdown>;
    }
}

export default MarkdownConverter;
