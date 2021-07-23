import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutStyle } from '..';

interface Props {
    title?: string;
}
interface States {}

class IndexLayout extends Component<Props, States> {
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
                        <main className={LayoutStyle.TopContainer}>{this.props.children}</main>
                    </div>
                </div>
            </>
        );
    }
}

export default IndexLayout;
