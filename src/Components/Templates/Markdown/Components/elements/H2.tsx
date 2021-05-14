import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Markdown.module.scss';

interface Props {}
interface States {}

class MD_h2 extends Component<Props, States> {
    render() {
        return (
            <>
                <h2 className={Style.H2}>
                    <Link to='#' className={Style.H_Link}>
                        {this.props.children}
                    </Link>
                </h2>
            </>
        );
    }
}

export default MD_h2;
