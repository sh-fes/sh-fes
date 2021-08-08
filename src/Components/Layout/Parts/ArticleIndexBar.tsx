import React, { Component } from 'react';
import { LayoutStyle } from '..';

interface Props {}
interface States {}

class ArticleIndexBar extends Component<Props, States> {
    render() {
        return (
            <>
                <aside className={LayoutStyle.RightContainer}>
                    <ul>
                        <li>index</li>
                        <li>index</li>
                        <li>index</li>
                        <li>index</li>
                        <li>index</li>
                        <li>index</li>
                    </ul>
                </aside>
            </>
        );
    }
}

export default ArticleIndexBar;
