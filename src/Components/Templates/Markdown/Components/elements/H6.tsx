import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Markdown.module.scss';

interface Props {
    children: string;
}
interface States {}

class MD_h6 extends Component<Props, States> {
    render() {
        return (
            <>
                <h6 id={this.props.children} className={Style.H6}>
                    <Link to={`#${this.props.children}`} className={Style.H_Link}>
                        {this.props.children}
                    </Link>
                </h6>
            </>
        );
    }
}

export default MD_h6;
