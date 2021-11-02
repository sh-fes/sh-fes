import React, { Component } from 'react';
import Style from '../../../App.module.scss';
import { background } from '../../../public';

interface Props {
    title: string;
}
interface States {}

class ArticleHeader extends Component<Props, States> {
    render() {
        return (
            <>
                <div className={Style.ArticleHeaderContainer}>
                    <div className={Style.ArticleHeader}>
                        <img src={background} alt='fill' className={Style.GroupIcon} />
                        <div className={Style.ArticleName}>{this.props.title}</div>
                    </div>
                </div>
            </>
        );
    }
}

export default ArticleHeader;
