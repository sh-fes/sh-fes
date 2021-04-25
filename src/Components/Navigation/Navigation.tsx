import React, { Component } from 'react';
import Style from './Navigation.module.css';
import NavigationConfig from './NavigationConfig';
import NavigationPart, { renderData } from './NavigationPart';

interface Props {}
interface States {
    Active: boolean;
}

class Navigation extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { Active: false };
    }
    update(Active: boolean): renderData {
        const sum = Active ? 150 : 0;
        const diff = Active ? -30 : -30;
        return { sum, diff };
    }
    componentDidMount() {
        this.update(this.state.Active);
    }
    render() {
        return (
            <div className={Style.Container}>
                <input
                    type='checkbox'
                    name='Button'
                    id='Button'
                    onChange={(e) => {
                        this.setState({ Active: e.target.checked });
                    }}
                    className={Style.Button}
                    defaultChecked={false}
                    hidden={true}
                />
                <label htmlFor='Button' className={Style.ButtonLabel}></label>
                <nav className={Style.Nav}>
                    <ul className={Style.PartsList}>
                        {NavigationConfig.map((item, index) => (
                            <NavigationPart
                                to={item.to}
                                key={index}
                                count={NavigationConfig.length}
                                renderData={this.update(this.state.Active)}
                                config={item}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
