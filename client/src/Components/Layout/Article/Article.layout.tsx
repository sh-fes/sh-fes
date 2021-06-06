import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ArticleLeftSidebar, ArticleRightSidebar } from '.';
import { LayoutStyle } from '..';

interface Props {
    title?: string;
}
interface States {}

class ArticleLayout extends Component<Props, States> {
    render() {
        return (
            <>
                <Helmet>
                    <title>{this.props.title ?? 'No Title'}</title>
                </Helmet>
                <div className={LayoutStyle.Container}>
                    <aside className={LayoutStyle.LeftContainer}>
                        <ArticleLeftSidebar />
                    </aside>
                    <main className={LayoutStyle.MainContainer}>
                        {this.props.children}
                    </main>
                    <aside className={LayoutStyle.RightContainer}>
                        <ArticleRightSidebar />
                    </aside>
                </div>
            </>
        );
    }
}

export default ArticleLayout;
