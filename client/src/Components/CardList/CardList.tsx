import React, { Component } from 'react';
import { background } from '../../public';
import { CardListContent } from './CardListContent';
import Style from './CardList.module.scss';

interface Props {
    id: string;
    title: string;
    gutter: number;
    cardsData: CardData[];
}
interface States {}
interface CardData {
    title: string;
    description: string;
}

class CardList extends Component<Props, States> {
    render() {
        return (
            <>
                <div className={Style.Container} id={this.props.id}>
                    <div className={Style.Identity}>
                        <img src={background} alt='fill' className={Style.AuthorIcon} />
                        <div className={Style.AuthorName}>{this.props.title}</div>
                    </div>
                    <CardListContent gutter={this.props.gutter} cardsData={this.props.cardsData} />
                </div>
            </>
        );
    }
}

export default CardList;
