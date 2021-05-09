import React, { Component } from 'react';
import Style from '../Markdown.module.scss';

interface Props {}
interface States {}

class MD_LI extends Component<Props, States> {
    render() {
        return (
            <>
                <li className={Style.LI}>{this.props.children}</li>;
            </>
        );
    }
}

export default MD_LI;
