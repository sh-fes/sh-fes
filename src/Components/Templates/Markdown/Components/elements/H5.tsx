import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Markdown.module.scss';

interface Props {}
interface States {}

class MD_h5 extends Component<Props, States> {
    render() {
        return (
            <>
                <h5 className={Style.H5}>
                    <Link to='#' className={Style.H_Link}>
                        {this.props.children}
                    </Link>
                </h5>
            </>
        );
    }
}

export default MD_h5;
