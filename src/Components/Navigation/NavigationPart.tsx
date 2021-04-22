import React, { Component, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
// import './CircleNav.scss';
import { TNavigationConfig } from './NavigationConfig';

export type transform = {
    count: number;
    sum: number;
    diff: number;
};
interface Props {
    transform: transform;
    config: TNavigationConfig;
}
interface States {
    transform: transform;
}

class NavigationPart extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { transform: this.props.transform };
    }
    componentWillReceiveProps(props: Props) {
        if (props.transform) this.setState({ transform: props.transform });
    }
    returnParentConfig(config: transform): CSSProperties {
        const { count, sum, diff } = config;
        const { id } = this.props.config;
        const rotate = diff + (sum / count) * id;
        const skew = 90 - sum / count;
        return {
            transform: `rotate(${rotate}deg) skew(${skew}deg)`,
        };
    }
    returnChildConfig(config: transform): CSSProperties {
        const { count, sum } = config;
        const skew = -90 + sum / count;
        const rotate = -90 + sum / count / 2;
        return {
            transform: `skew(${skew}deg) rotate(${rotate}deg)`,
        };
    }
    ra() {
        const { count, sum, diff } = this.state.transform;
        const { id } = this.props.config;
        const rotate = diff + (sum / count) * id;
        const skew = 90 - sum / count;
        return {
            transform: `rotate(${rotate}deg) skew(${skew}deg)`,
        };
    }
    render() {
        return (
            <li
                className={`child`}
                style={this.returnParentConfig(this.state.transform)}
            >
                <Link
                    to='#'
                    style={this.returnChildConfig(this.state.transform)}
                >
                    <span>{this.props.config.title}</span>
                </Link>
            </li>
        );
    }
}

export default NavigationPart;
