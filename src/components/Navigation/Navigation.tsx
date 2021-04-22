import React, { Component } from 'react';
import Style from './Navigation.module.css';
import NavigationConfig from './NavigationConfig';
import NavigationPart, { transform } from './NavigationPart';

interface Props {}
interface States {
    Active: boolean;
}

class Navigation extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { Active: false };
    }
    r(Active: boolean): transform {
        const count = document.querySelector('ul.nav')?.children.length ?? 0;
        const sum = Active ? 150 : 0;
        const diff = Active ? -30 : -30;
        return { count, sum, diff };
    }
    render() {
        return (
            <div className={Style.Container}>
                <button
                    className={Style.button}
                    onClick={() => {
                        this.setState({ Active: !this.state.Active });
                    }}
                >
                    +
                </button>
                <ul className={Style.PartsList}>
                    {NavigationConfig.map((item) => (
                        <NavigationPart
                            transform={this.r(this.state.Active)}
                            config={item}
                        />
                    ))}
                </ul>
                {/* <CircleList Active={ this.state.Active}/> */}
                <input
                    type='checkbox'
                    name='nav-open'
                    id='nav-open'
                    onChange={(e) => {
                        this.setState({ Active: e.target.checked });
                    }}
                />
                <label htmlFor='nav-open'></label>
            </div>
        );
    }
}

export default Navigation;
