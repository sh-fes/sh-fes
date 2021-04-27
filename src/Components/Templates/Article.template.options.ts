import { MarkdownToJSX } from 'markdown-to-jsx';
import { MD_H1, MD_LI, MD_UL } from './Components';

const options: MarkdownToJSX.Options = {
    wrapper: 'article',
    overrides: {
        h1: {
            component: MD_H1,
        },
        li: {
            component: MD_LI,
        },
        ul: {
            component: MD_UL,
        }
    },
};

export default options;