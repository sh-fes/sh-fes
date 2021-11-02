import React, { Component } from 'react';
import Style from '../../App.module.scss';
import { background } from '../../public';

interface Props {
    title: string;
}
interface States {}

class GroupHeader extends Component<Props, States> {
    render() {
        return (
            <>
                <div className={Style.GroupHeaderContainer}>
                    <div className={Style.GroupHeader}>
                        <img src={background} alt='fill' className={Style.GroupIcon} />
                        <div className={Style.GroupName}>{this.props.title}</div>
                    </div>
                </div>
            </>
        );
    }
}

export default GroupHeader;
