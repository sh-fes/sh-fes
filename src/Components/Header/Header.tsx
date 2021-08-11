import Slide from '@material-ui/core/Slide';
import React, { Component } from 'react';
import { GlobalStateContext } from '../../Global';
import Style from './Header.module.scss';

interface Props {}
interface States {}

class NameOfClass extends Component<Props, States> {
    static contextType = GlobalStateContext;
    context!: React.ContextType<typeof GlobalStateContext>;
    render() {
        return (
            <>
                <Slide appear={false} direction='down' in={this.context?.scroll?.down ?? false}>
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
