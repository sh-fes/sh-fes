import { MarkdownToJSX } from 'markdown-to-jsx';
import {
    MD_H1,
    MD_H2,
    MD_H3,
    MD_H4,
    MD_H5,
    MD_H6,
    MD_LI,
    MD_UL,
    Title,
} from './Components/';

const options: MarkdownToJSX.Options = {
    wrapper: 'article',
    overrides: {
        Title,
        h1: {
            component: MD_H1,
        },
        h2: {
            component: MD_H2,
        },
        h3: {
            component: MD_H3,
        },
        h4: {
            component: MD_H4,
        },
        h5: {
            component: MD_H5,
        },
        h6: {
            component: MD_H6,
        },
        li: {
            component: MD_LI,
        },
        ul: {
            component: MD_UL,
        },
    },
};

export default options;
