import Markdown from 'markdown-to-jsx';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Base from './PageBase';

class H1 extends Component {
    render() {
        return (
            <h1>
                <u>{this.props.children}</u>
            </h1>
        );
    }
}

class Home extends Component {
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
        return (
            <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Base pageTitle='Home'>
                    <div className='home'>
                        <h1>Home</h1>
                    </div>
                    <Markdown
                        options={{
                            overrides: {
                                h1: {
                                    component: H1,
                                    props: {
                                        className: 'foo',
                                    },
                                },
                            },
                        }}
                    >
                        {this.data().main}
                    </Markdown>
                </Base>
            </>
        );
    }
}

export default Home;
