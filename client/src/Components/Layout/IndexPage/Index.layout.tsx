import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { IndexLeftSidebar, IndexRightSidebar } from '.';
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
                <div className={LayoutStyle.Container}>
                    <aside className={LayoutStyle.LeftContainer}>
                        <IndexLeftSidebar />
                    </aside>
                    <main className={LayoutStyle.MainContainer}>
                        {this.props.children}
                    </main>
                    <aside className={LayoutStyle.RightContainer}>
                        <IndexRightSidebar />
                    </aside>
                </div>
            </>
        );
    }
}

export default IndexLayout;
