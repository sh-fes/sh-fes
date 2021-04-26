import React, { Component } from 'react';
import Style from './Markdown.module.css';

class MD_h1 extends Component {
    render() {
        return <h1 className={Style.H1}>{this.props.children}</h1>;
    }
}

export default MD_h1;
