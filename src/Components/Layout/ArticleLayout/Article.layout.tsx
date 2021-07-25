import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArticleIndexBar } from '.';
import { LayoutStyle, Share } from '..';
import { background } from '../../../public';

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
                        <main className={LayoutStyle.MainContainer}>
                            <div className={LayoutStyle.Identity}>
                                <img
                                    src={background}
                                    alt='fill'
                                    className={LayoutStyle.AuthorIcon}
                                />
                                <div className={LayoutStyle.AuthorName}>Otkrickey</div>
                            </div>
                            {this.props.children}
                        </main>
                        <aside className={LayoutStyle.RightContainer}>
                            <ArticleIndexBar />
                        </aside>
                    </div>
                </div>
            </>
        );
    }
}

export default ArticleLayout;
