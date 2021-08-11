import InstagramIcon from '@material-ui/icons/Instagram';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React, { Component } from 'react';
import RootStyle from '../../../App.module.scss';

interface Props {}
interface States {}

class Share extends Component<Props, States> {
    render() {
        return (
            <>
                <aside className={RootStyle.Share}>
                    <LinkIcon className={RootStyle.ShareIcon} />
                    <YouTubeIcon className={RootStyle.ShareIcon} />
                    <InstagramIcon className={RootStyle.ShareIcon} />
                    <TwitterIcon className={RootStyle.ShareIcon} />
                </aside>
            </>
        );
    }
}

export default Share;
