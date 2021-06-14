import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
                <div className={LayoutStyle.Background}>
                    <div className={LayoutStyle.BackgroundImageContainer}>
                        <img
                            className={LayoutStyle.BackgroundImage}
                            src={background}
                            alt='fill'
                        />
                    </div>
                </div>
                <div className={LayoutStyle.Container}>
                    <aside className={LayoutStyle.Share}>
                        <TwitterIcon className={LayoutStyle.ShareIcon} />
                        <InstagramIcon className={LayoutStyle.ShareIcon} />
                        <FacebookIcon className={LayoutStyle.ShareIcon} />
                    </aside>
                    <main className={LayoutStyle.TopContainer}>
                        {this.props.children}
                    </main>
                </div>
            </>
        );
    }
}

export default ArticleLayout;
