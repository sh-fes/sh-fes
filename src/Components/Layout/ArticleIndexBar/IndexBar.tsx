import React, { Component } from 'react';
import RootStyle from '../../../App.module.scss';

interface Props {}
interface States {}

class IndexBar extends Component<Props, States> {
    render() {
        return (
            <>
                <aside className={RootStyle.RightContainer}>
                    <ul>
                        <li>index</li>
                        <li>index</li>
                        <li>index</li>
                        <li>index</li>
                        <li>index</li>
                        <li>index</li>
                    </ul>
                </aside>
            </>
        );
    }
}

export default IndexBar;
