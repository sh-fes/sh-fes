import React, { Component } from 'react';
import RootStyle from '../../App.module.scss';
import { NotFound } from '../../pages';
import { IndexBar, Share } from './Parts';

type LayoutProfileName = 'top' | 'index' | 'article' | 'admin' | 'notfound';
interface SwitcherProps {
    layout: LayoutProfileName;
    children?: React.ReactNode;
}

function ShareBarSwitcher({ layout: profile }: SwitcherProps) {
    switch (profile) {
        default:
            return <Share />;
    }
}
function MainSwitcher({ layout: profile, children }: SwitcherProps) {
    switch (profile) {
        case 'top':
            return <main className={RootStyle.TopContainer}>{children}</main>;
        case 'index':
            return <main className={RootStyle.TopContainer}>{children}</main>;
        case 'article':
            return <main className={RootStyle.MainContainer}>{children}</main>;
        case 'admin':
            return <main className={RootStyle.TopContainer}>{children}</main>;
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
function SidebarSwitcher({ layout: profile }: SwitcherProps) {
    switch (profile) {
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
                <div className={RootStyle.Layout}>
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
