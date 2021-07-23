import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutStyle, Share } from '..';
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
                <div className={LayoutStyle.Main}>
                    <div className={LayoutStyle.Slid}>
                        <div className={LayoutStyle.Fade}></div>
                        <div className={LayoutStyle.Mono}></div>
                    </div>
                    <div className={LayoutStyle.Container}>
                        <Share />
                        <main className={LayoutStyle.TopContainer}>{this.props.children}</main>
                    </div>
                </div>
            </>
        );
    }
}

export default ArticleLayout;
