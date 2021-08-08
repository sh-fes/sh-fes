import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutStyle } from '.';
import { IndexBar, Share } from './Parts';

type LayoutProfileName = 'top' | 'index' | 'article';
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
            return <main className={LayoutStyle.TopContainer}>{children}</main>;
        case 'index':
            return <main className={LayoutStyle.TopContainer}>{children}</main>;
        case 'article':
            return <main className={LayoutStyle.MainContainer}>{children}</main>;
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
    title?: string;
    layout: LayoutProfileName;
}
interface States {}

class Layout extends Component<Props, States> {
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
