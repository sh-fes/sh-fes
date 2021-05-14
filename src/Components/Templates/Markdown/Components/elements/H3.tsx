import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Markdown.module.scss';

interface Props {}
interface States {}

class MD_h3 extends Component<Props, States> {
    render() {
        return (
            <>
                <h3 className={Style.H3}>
                    <Link to='#' className={Style.H_Link}>
                        {this.props.children}
                    </Link>
                </h3>
            </>
        );
    }
}

export default MD_h3;
