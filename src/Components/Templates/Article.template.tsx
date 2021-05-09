import Markdown from 'markdown-to-jsx';
import React, { Component } from 'react';
import options from './Article.template.options';

interface Props {}
interface States {}

class ArticleTemplate extends Component<Props, States> {
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
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore earum aliquid esse mollitia odit doloribus, adipisci rerum nihil quae recusandae. Non ipsam magnam obcaecati fugiat ex dignissimos porro doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore earum aliquid esse mollitia odit doloribus, adipisci rerum nihil quae recusandae. Non ipsam magnam obcaecati fugiat ex dignissimos porro doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore earum aliquid esse mollitia odit doloribus, adipisci rerum nihil quae recusandae. Non ipsam magnam obcaecati fugiat ex dignissimos porro doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore earum aliquid esse mollitia odit doloribus, adipisci rerum nihil quae recusandae. Non ipsam magnam obcaecati fugiat ex dignissimos porro doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore earum aliquid esse mollitia odit doloribus, adipisci rerum nihil quae recusandae. Non ipsam magnam obcaecati fugiat ex dignissimos porro doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore earum aliquid esse mollitia odit doloribus, adipisci rerum nihil quae recusandae. Non ipsam magnam obcaecati fugiat ex dignissimos porro doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore earum aliquid esse mollitia odit doloribus, adipisci rerum nihil quae recusandae. Non ipsam magnam obcaecati fugiat ex dignissimos porro doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore earum aliquid esse mollitia odit doloribus, adipisci rerum nihil quae recusandae. Non ipsam magnam obcaecati fugiat ex dignissimos porro doloribus.



- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3

> お世話になります。xxxです。
> 
> ご連絡いただいた、バグの件ですが、仕様です。

<center>asdasdasd</center>
<h3>好きな動物</h3>
<ul type="disc">
<li>白くま</li>
<li>ライオン</li>
<li>クロヒョウ</li>
<li>チンパンジー</li>
<li>山猫</li>
</ul>


<span>asd</span>

|a  |b  |c  |
|---|---|---|
|   |2  |3  |
|4  |5  |6  |
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
