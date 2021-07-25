import React, { Component } from 'react';
import Style from './Navigation.module.scss';

interface Props {}
interface States {}

class NavCircle extends Component<Props, States> {
    render() {
        return (
            <>
                <svg
                    type='image/svg+xml'
                    width='100'
                    height='100'
                    viewBox='0 0 100 100'
                    className={Style.NavCircle}
                >
                    <circle
                        className={Style.CirclePart}
                        cx={'100'}
                        cy={'90'}
                        r={'96'}
                        fill='#ffffff99'
                    />
                    <circle
                        className={Style.CirclePart}
                        cx={'100'}
                        cy={'90'}
                        r={'96'}
                        fill='#45d9fa83'
                    />
                    <circle
                        className={Style.CirclePart}
                        cx={'97'}
                        cy={'87'}
                        r={'93'}
                        fill='#60e2e667'
                    />
                    <circle
                        className={Style.CirclePart}
                        cx={'94'}
                        cy={'84'}
                        r={'90'}
                        fill='#60bbe667'
                    />
                </svg>
            </>
        );
    }
}

export default NavCircle;
