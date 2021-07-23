import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArticleIndexBar } from '.';
import { LayoutStyle } from '..';
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
                        <aside className={LayoutStyle.Share}>
                            <TwitterIcon className={LayoutStyle.ShareIcon} />
                            <InstagramIcon className={LayoutStyle.ShareIcon} />
                            <FacebookIcon className={LayoutStyle.ShareIcon} />
                        </aside>
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
