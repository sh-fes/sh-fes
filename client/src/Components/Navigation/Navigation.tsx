import Fab from '@material-ui/core/Fab';
import React, { Component } from 'react';
import NavButton from './NavigationButton';
import NavCircle from './NavigationCircle';
import NavContent from './NavigationList';
import Style from './Navigation.module.scss';

interface Props {}
interface States {
    active: boolean;
}

class Navigation extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { active: false };
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({ active: !this.state.active });
    }
    render() {
        return (
            <>
                <div
                    className={[
                        Style.Container,
                        this.state.active ? Style.Container_Active : null,
                    ].join(' ')}
                >
                    <nav className={Style.Nav}>
                        <NavCircle />
                        <NavContent />
                    </nav>
                    <Fab className={Style.FAB} onClick={this.update}>
                        <NavButton />
                    </Fab>
                </div>
            </>
        );
    }
}

export default Navigation;
