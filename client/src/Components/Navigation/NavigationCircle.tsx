import React, { Component } from 'react';
import Style from './Navigation.module.scss';

interface Props {}
interface States {}

class NavCircle extends Component<Props, States> {
    render() {
        return (
            <>
                <svg
                    width='550'
                    height='1000'
                    viewBox='0 0 550 1000'
                    className={Style.NavCircle}
                >
                    <circle
                        className={Style.c}
                        cx='800'
                        cy='750'
                        r='750'
                        fill='#ffffff99'
                    />
                    <circle
                        className={Style.c}
                        cx='800'
                        cy='750'
                        r='750'
                        fill='#45d9fa83'
                    />
                    <circle
                        className={Style.c}
                        cx='770'
                        cy='720'
                        r='720'
                        fill='#60e2e667'
                    />
                    <circle
                        className={Style.c}
                        cx='750'
                        cy='700'
                        r='700'
                        fill='#60bbe667'
                    />
                </svg>
            </>
        );
    }
}

export default NavCircle;
