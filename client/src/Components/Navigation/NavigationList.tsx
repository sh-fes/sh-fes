import React, { Component } from 'react';
import Style from './Navigation.module.scss';
import NavPart from './NavigationListItem';
import NavigationConfig, { TNavigationConfig } from './NavigationListItemConfig';

interface Props {}
interface States {}

class NavContent extends Component<Props, States> {
    render() {
        return (
            <>
                <ul className={Style.PartsList}>
                    {NavigationConfig.map((config: TNavigationConfig, key) => (
                        <NavPart
                            to={config.to}
                            title={config.title}
                            key={key}
                        />
                    ))}
                </ul>
            </>
        );
    }
}

export default NavContent;
