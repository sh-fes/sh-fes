import React, { Component } from 'react';
import Style from '../../App.module.scss';
import { LayoutProfileName } from '../../util';
import { IndexBar } from './ArticleIndexBar';
import { Footer } from './Footer';
import { Share } from './Share';

interface SwitcherProps {
    layout: LayoutProfileName;
    children?: React.ReactNode;
}

function ShareBarSwitcher({ layout }: SwitcherProps) {
    switch (layout) {
        case 'index':
        case 'article':
        case 'notfound':
            return <Share />;
        default:
            return null;
    }
}
function MainSwitcher({ layout, children }: SwitcherProps) {
    switch (layout) {
        case 'top':
        case 'index':
        case 'article':
        case 'notfound':
            return <main className={Style.LayoutMain}>{children}</main>;
        case 'admin':
            return <main className={Style.AdminContainer}>{children}</main>;
        default:
            return null;
    }
}
function SidebarSwitcher({ layout }: SwitcherProps) {
    switch (layout) {
        case 'article':
            return <IndexBar />;
        default:
            return null;
    }
}
const LayoutClassName = (layout: LayoutProfileName) => {
    switch (layout) {
        case 'top':
            return Style.Layout_TopPage;
        case 'index':
            return Style.Layout_IndexPage;
        case 'article':
            return Style.Layout_ArticlePage;
        case 'admin':
            return Style.Layout_AdminPage;
        default:
            return Style.Layout_NotFound;
    }
};
interface Props {
    layout: LayoutProfileName;
    children?: React.ReactNode;
}
interface States {}

class Layout extends Component<Props, States> {
    render() {
        const { layout } = this.props;
        return (
            <div className={LayoutClassName(layout)}>
                <div className={Style.Body}>
                    <div
                        id='layout-main-slid'
                        className={Style.MainSlid}
                        aria-label='main-slid'
                        role='figure'
                    >
                        <div className={Style.MainSlidFade}></div>
                        <div className={Style.MainSlidMono}></div>
                    </div>
                    <div className={Style.LayoutMainContainer}>
                        <ShareBarSwitcher layout={layout} />
                        <MainSwitcher layout={layout} children={this.props.children} />
                        <SidebarSwitcher layout={layout} />
                    </div>
                </div>
                <div className={Style.Footer}>
                    <div className={Style.FooterSlid}></div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Layout;
