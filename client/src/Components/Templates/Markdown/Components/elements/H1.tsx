import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Markdown.module.scss';

interface Props {}
interface States {}

class MD_h1 extends Component<Props, States> {
    render() {
        return (
            <>
                <h1 className={Style.H1}>
                    <Link to='#' className={Style.H_Link}>
                        {this.props.children}
                    </Link>
                </h1>
            </>
        );
    }
}

export default MD_h1;
