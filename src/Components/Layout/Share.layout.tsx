import InstagramIcon from '@material-ui/icons/Instagram';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React, { Component } from 'react';
import LayoutStyle from './Layout.module.scss';

interface Props {}
interface States {}

class Share extends Component<Props, States> {
    render() {
        return (
            <>
                <aside className={LayoutStyle.Share}>
                    <LinkIcon className={LayoutStyle.ShareIcon} />
                    <YouTubeIcon className={LayoutStyle.ShareIcon} />
                    <InstagramIcon className={LayoutStyle.ShareIcon} />
                    <TwitterIcon className={LayoutStyle.ShareIcon} />
                </aside>
            </>
        );
    }
}

export default Share;
