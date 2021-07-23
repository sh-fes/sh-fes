import React, { Component } from 'react';
import Style from './Navigation.module.scss';

interface Props {}
interface States {}

class NavCircle extends Component<Props, States> {
    render() {
        interface CircleData {
            cx: string;
            cy: string;
            r: string;
        }
        const _g = 15;
        const _x = 500;
        const _y = 420;
        const _r = 450;
        const data: CircleData[] = [
            { cx: `${_x + _g * 2}`, cy: `${_y + _g * 2}`, r: `${_r + _g * 2}` },
            { cx: `${_x + _g * 1}`, cy: `${_y + _g * 1}`, r: `${_r + _g * 1}` },
            { cx: `${_x + _g * 0}`, cy: `${_y + _g * 0}`, r: `${_r + _g * 0}` },
        ];
        return (
            <>
                <svg
                    type='image/svg+xml'
                    width='300'
                    height='500'
                    viewBox='0 0 300 500'
                    className={Style.NavCircle}
                >
                    <circle
                        className={Style.CirclePart}
                        {...data[0]}
                        fill='#ffffff99'
                    />
                    <circle
                        className={Style.CirclePart}
                        {...data[0]}
                        fill='#45d9fa83'
                    />
                    <circle
                        className={Style.CirclePart}
                        {...data[1]}
                        fill='#60e2e667'
                    />
                    <circle
                        className={Style.CirclePart}
                        {...data[2]}
                        fill='#60bbe667'
                    />
                </svg>
            </>
        );
    }
}

export default NavCircle;
