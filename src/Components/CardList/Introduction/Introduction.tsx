import React, { Component } from 'react';
import Style from '../CardList.module.scss';

interface Props {
    introduction: string;
}
interface States {}

class Introduction extends Component<Props, States> {
    render() {
        return (
            <>
                <p className={Style.Introduction}>{this.props.introduction}</p>
            </>
        );
    }
}

export default Introduction;
