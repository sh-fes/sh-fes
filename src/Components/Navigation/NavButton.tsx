import React, { Component } from 'react';
import Style from './Navigation.module.scss';

interface Props {}
interface States {}

class NavButton extends Component<Props, States> {
    render() {
        return (
            <>
                <svg
                    className={Style.NavButton}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                >
                    <rect
                        className={Style.Line}
                        x='3'
                        y='6'
                        width='18'
                        height='2'
                        rx='1'
                        fill='black'
                    />
                    <rect
                        className={Style.Line}
                        x='3'
                        y='11'
                        width='18'
                        height='2'
                        rx='1'
                        fill='black'
                    />
                    <rect
                        className={Style.Line}
                        x='3'
                        y='16'
                        width='18'
                        height='2'
                        rx='1'
                        fill='black'
                    />
                </svg>
            </>
        );
    }
}
export default NavButton;
