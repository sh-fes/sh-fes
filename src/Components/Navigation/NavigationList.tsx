import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from './Navigation.module.scss';
import NavigationConfig, { TNavigationConfig } from './NavigationListItemConfig';

interface Props {}
interface States {}

class NavContent extends Component<Props, States> {
    render() {
        return (
            <>
                <ul className={Style.PartsList}>
                    {NavigationConfig.map((config: TNavigationConfig, key) => (
                        <li className={Style.Parts} key={key}>
                            <Link className={Style.PartsLink} to={config.to}>
                                {config.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default NavContent;
