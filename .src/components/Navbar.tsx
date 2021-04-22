import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { SidebarData } from './SidebarData';

interface Props {}

interface State {
    sidebar: boolean;
}

class Navbar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { sidebar: false };
        this.showSidebar = this.showSidebar.bind(this);
    }
    showSidebar() {
        this.setState((state, props) => ({ sidebar: !state.sidebar }));
    }
    render() {
        return (
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={this.showSidebar} />
                    </Link>
                </div>
                <nav
                    className={
                        this.state.sidebar ? 'nav-menu active' : 'nav-menu'
                    }
                >
                    <ul className='nav-menu-items' onClick={this.showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        );
    }
}

export default Navbar;
