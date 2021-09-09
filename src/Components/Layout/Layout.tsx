import React, { Component } from 'react';
import RootStyle from '../../App.module.scss';
import { NotFound } from '../../pages';
import { IndexBar, Share } from './Parts';

type LayoutProfileName = 'top' | 'index' | 'article' | 'admin' | 'notfound';
interface SwitcherProps {
    layout: LayoutProfileName;
    children?: React.ReactNode;
}

function ShareBarSwitcher({ layout }: SwitcherProps) {
    switch (layout) {
        case 'top':
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
            return <main className={RootStyle.TopContainer}>{children}</main>;
        case 'article':
            return <main className={RootStyle.MainContainer}>{children}</main>;
        case 'admin':
            return <main className={RootStyle.AdminContainer}>{children}</main>;
        case 'notfound':
            return (
                <main className={RootStyle.TopContainer}>
                    <NotFound />
                </main>
            );
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

interface Props {
    layout: LayoutProfileName;
}
interface States {}

class Layout extends Component<Props, States> {
    render() {
        return (
            <>
                <div
                    className={RootStyle.Layout}
                    style={this.props.layout === 'top' ? { marginTop: '100vh', paddingTop: 0 } : {}}
                >
                    <div className={RootStyle.Slid}>
                        <div className={RootStyle.Fade}></div>
                        <div className={RootStyle.Mono}></div>
                    </div>
                    <div className={RootStyle.Container}>
                        <ShareBarSwitcher layout={this.props.layout} />
                        <MainSwitcher children={this.props.children} layout={this.props.layout} />
                        <SidebarSwitcher layout={this.props.layout} />
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;
