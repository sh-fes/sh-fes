import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from './Navigation.module.css';
import { TNavigationConfig } from './NavigationConfig';

export interface renderData {
    sum: number;
    diff: number;
}
interface Props {
    renderData: renderData;
    config: TNavigationConfig;
    count: number;
    to: string;
}
interface States {
    renderData: renderData;
}

class NavigationPart extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { renderData: this.props.renderData };
    }
    componentDidMount() {
        this.update(this.state.renderData);
    }
    componentWillReceiveProps(props: Props) {
        if (props.renderData) this.setState({ renderData: props.renderData });
    }
    update(renderData: renderData) {
        const c = this.props.count;
        const { sum: s, diff: d } = renderData;
        const { id: i } = this.props.config;
        return {
            li: `rotate(${d + (s / c) * i}deg) skew(${90 - s / c}deg)`,
            link: `skew(${-90 + s / c}deg) rotate(${-90 + s / c / 2}deg)`,
            child: `rotate(${-d - (s / c) * (i + 1 / 2) + 90}deg)`,
        };
    }
    render() {
        return (
            <li
                className={Style.Parts}
                style={{ transform: this.update(this.state.renderData).li }}
            >
                <Link
                    className={Style.PartsLink}
                    style={{
                        transform: this.update(this.state.renderData).link,
                    }}
                    to={this.props.to}
                >
                    <div
                        className={Style.PartsContent}
                        style={{
                            transform: this.update(this.state.renderData).child,
                        }}
                    >
                        {this.props.config.title}
                    </div>
                </Link>
            </li>
        );
    }
}

export default NavigationPart;
