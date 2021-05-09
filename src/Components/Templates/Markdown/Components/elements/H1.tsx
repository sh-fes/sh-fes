import React, { Component } from 'react';
import Style from '../Markdown.module.scss';

interface Props {}
interface States {}

class MD_h1 extends Component<Props, States> {
    render() {
        return <h1 className={Style.H1}>{this.props.children}</h1>;
    }
}

export default MD_h1;
