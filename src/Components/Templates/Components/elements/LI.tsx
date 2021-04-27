import React, { Component } from 'react';
import Style from '../Markdown.module.css';

class MD_LI extends Component {
    render() {
        return <li className={Style.LI}>{this.props.children}</li>;
    }
}

export default MD_LI;
