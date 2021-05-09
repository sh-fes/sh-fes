import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from './Navigation.module.scss';

interface Props {
    to: string;
    title: string;
}
interface States {}

class NavPart extends Component<Props, States> {
    render() {
        return (
            <li className={Style.Parts}>
                <Link className={Style.PartsLink} to={this.props.to}>
                    {this.props.title}
                </Link>
            </li>
        );
    }
}

export default NavPart;
