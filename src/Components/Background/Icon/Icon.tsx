import React, { Component } from 'react';
import Style from './Icon.module.scss';
import Path from './Path';
import * as d from './PathProps';
class IconA extends Component<{}, { time: number }> {
    watch: NodeJS.Timeout | null;
    constructor(props: {}) {
        super(props);
        this.state = { time: 0 };
        this.watch = null;
    }
    componentDidMount() {
        this.watch = setInterval(() => {
            this.setState({ time: this.state.time + 50 });
            if (this.watch && this.state.time > 31.0 * 100) clearInterval(this.watch);
        }, 50);
    }
    componentWillUnmount() {
        if (this.watch) clearInterval(this.watch);
    }
    render() {
        const t = (timing: number, duration: number) => ({
            x: 100 * 1.5,
            s: 100,
            ct: this.state.time,
            t: timing,
            d: duration,
        });
        return (
            <svg
                style={{
                    height: '50vh',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translateX(-50%) translateY(-50%)',
                    boxSizing: 'border-box',
                }}
                width='3072'
                height='4096'
                viewBox='0 0 3072 4096'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                role='figure'
            >
                <Path t={t(0.5, 2)} d={d.T12} n={Style.T12} />
                <Path t={t(1.5, 2)} d={d.T23} n={Style.T23} />
                <Path t={t(2.5, 2)} d={d.T34} n={Style.T34} />
                <Path t={t(4.5, 2)} d={d.T56} n={Style.T56} />
                <Path t={t(5.5, 2)} d={d.T67} n={Style.T67} />
                <Path t={t(6.5, 2)} d={d.T78} n={Style.T78} />
                <Path t={t(7.5, 2)} d={d.T89} n={Style.T89} />
                <Path t={t(0.0, 2)} d={d.K1} n={Style.K1} />
                <Path t={t(1.0, 2)} d={d.K2} n={Style.K2} />
                <Path t={t(2.0, 2)} d={d.K3} n={Style.K3} />
                <Path t={t(3.0, 2)} d={d.K4} n={Style.K4} />
                <Path t={t(4.0, 2)} d={d.K5} n={Style.K5} />
                <Path t={t(5.0, 2)} d={d.K6} n={Style.K6} />
                <Path t={t(6.0, 2)} d={d.K7} n={Style.K7} />
                <Path t={t(7.0, 2)} d={d.K8} n={Style.K8} />
                <Path t={t(9.0, 5)} d={d.K9} n={Style.K9} />
                <Path t={t(12.0, 5)} d={d.T910} n={Style.T910} />
                <Path t={t(14.0, 5)} d={d.K10} n={Style.K10} />
                <Path t={t(17.0, 8)} d={d.T1011} n={Style.T1011} />
                <Path t={t(19.0, 12)} d={d.K11} n={Style.K11} />
                <Path t={t(0.5, 20)} d={d.S1} n={Style.S1} />
                <Path t={t(0.5, 20)} d={d.S2} n={Style.S2} />
                <Path t={t(0.5, 20)} d={d.S3} n={Style.S3} />
            </svg>
        );
    }
}
export default IconA;
