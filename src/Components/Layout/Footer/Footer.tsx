import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../../../App.module.scss';

const Footer = () => {
    return (
        <div className={Style.FooterContainer}>
            <nav className={Style.FooterNav}>
                <ul className={Style.List}>
                    <li className={Style.Item}><Link className={Style.Link} to='/'>最新情報</Link></li>
                    <li className={Style.Item}><Link className={Style.Link} to='/'>トップページ</Link></li>
                    <li className={Style.Item}><Link className={Style.Link} to='/'>記事一覧</Link></li>
                    <li className={Style.Item}><Link className={Style.Link} to='/'>Item4</Link></li>
                    <li className={Style.Item}><Link className={Style.Link} to='/'>Item5</Link></li>
                    <li className={Style.Item}><Link className={Style.Link} to='/'>Item6</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Footer;
