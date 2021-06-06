import React, { Component } from 'react';
import Style from '../Markdown.module.scss';

interface Props {}
interface States {}

class MD_UL extends Component<Props, States> {
    render() {
        return (
            <>
                <ul className={Style.UL}>{this.props.children}</ul>
            </>
        );
    }
}

export default MD_UL;
