import { MarkdownToJSX } from 'markdown-to-jsx';
import { MD_H1 } from './Components';

const options: MarkdownToJSX.Options = {
    overrides: {
        h1: {
            component: MD_H1,
            props: {
                className: 'foo',
            },
        },
    },
};

export default options;