import React, { Component } from 'react';
import Style from './Icon.module.scss';
interface Props {
    t: {
        s: number;
        t: number;
        d: number;
        x: number;
        ct: number;
    };
    d: string;
    n: string;
}
interface States {
    d: string;
}

class Path extends Component<Props, States> {
    private ref = React.createRef<SVGPathElement>();
    public name: string;
    public timing: number;
    public duration: number;
    constructor(props: Props) {
        super(props);
        this.state = {
            d: this.props.d,
        };
        this.name = [this.props.n, Style.LogoPath].join(' ');
        const { s, t, d, x } = this.props.t;
        this.timing = t * x + s;
        this.duration = d * x;
    }
    public render() {
        const v = this.timing < this.props.t.ct;
        const className = v ? this.name : undefined;
        return <path className={className} ref={this.ref} d={this.state.d} />;
    }
}

export default Path;
