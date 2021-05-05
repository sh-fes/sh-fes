import React, { Component } from 'react';
import Style from './sample.module.css';

interface Props {}
interface States {}

class Sample extends Component<Props, States> {
    render() {
        return (
            <>
                <svg
                    className={Style.Svg}
                    height='100'
                    width='100'
                    viewBox='0 0 100 100'
                >
                    <circle
                        className={Style.Circle}
                        r='25'
                        cx='50'
                        cy='50'
                        fill='transparent'
                        stroke='tomato'
                        stroke-width='50'
                        stroke-dasharray='calc(20 * 31.4 / 100 *5) calc(31.4 * 5)'
                        transform='rotate(-90) translate(-100)'
                    />
                </svg>
            </>
        );
    }
}
export default Sample;
