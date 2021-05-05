import React, { Component } from 'react';
import Style from '../Markdown.module.scss';
// import Style from '../Markdown.module.css';

class MD_UL extends Component {
    render() {
        return <ul className={Style.UL}>{this.props.children}</ul>;
    }
}

export default MD_UL;
