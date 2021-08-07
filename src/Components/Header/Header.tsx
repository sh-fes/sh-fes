import Slide from '@material-ui/core/Slide';
import React, { Component } from 'react';
import Style from './Header.module.scss';

interface Props {}
interface States {
    active: boolean;
    last: number;
}

class NameOfClass extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { active: true, last: 0 };
    }
    componentDidMount() {
        window.addEventListener(
            'scroll',
            () => {
                const st = window.pageYOffset || document.documentElement.scrollTop;
                this.setState({
                    active: st < this.state.last,
                    last: st <= 0 ? 0 : st,
                });
            },
            false,
        );
    }
    render() {
        return (
            <>
                <Slide appear={false} direction='down' in={this.state.active}>
                    <header className={Style.Header}>
                        <div className={Style.Container}>
                            <svg width='360' height='90' viewBox='0 0 400 100'>
                                <circle cx='120' cy='-300' r='400' stroke='red' fill='#00000000' />
                            </svg>
                        </div>
                        <div className={Style.Icon}></div>
                    </header>
                </Slide>
            </>
        );
    }
}

export default NameOfClass;
