import Markdown from 'markdown-to-jsx';
import React, { Component } from 'react';
import options from './Article.template.options';

class ArticleTemplate extends Component {
    data() {
        return {
            title: '',
            tags: [],
            author: {},
            main: `
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6
`,
            date: {},
            thumb: {},
            meta: {},
        };
    }
    render() {
        return <Markdown options={options}>{this.data().main}</Markdown>;
    }
}

export default ArticleTemplate;
