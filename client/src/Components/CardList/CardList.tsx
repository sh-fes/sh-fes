import React, { Component } from 'react';
import { CardD } from '..';
import { background } from '../../public';
import Style from './CardList.module.scss';

interface Props {
    id: string;
    title: string;
    gutter: number;
    cardsData: CardData[];
}
interface States {}
interface GridProps {
    container: HTMLDivElement | null;
    cardItems: NodeListOf<HTMLElement> | null;
    gutter: number;
    c: {
        _rW: number;
        _rH: number;
        rW: number;
        rH: number;
        cW: number;
        col: number;
        posXs: number[];
        posYs: number[];
    };
    mount: () => void;
    recal: () => void;
    cal: (container: HTMLDivElement, cardItems: NodeListOf<HTMLElement>, gutter: number) => void;
}
interface CardData {
    id: string;
    title: string;
    description: string;
}

class CardList extends Component<Props, States> {
    private CardList = React.createRef<HTMLDivElement>();
    private Grid: GridProps = {
        container: null,
        cardItems: null,
        gutter: 0,
        c: {
            _rW: 0,
            _rH: 0,
            rW: 0,
            rH: 0,
            cW: 0,
            col: 1,
            posXs: [],
            posYs: [],
        },
        mount: () => {
            const { container, cardItems, gutter } = this.Grid;
            if (!container) return false;
            if (!cardItems || cardItems.length === 0) return false;
            container.style.width = '';
            container.style.position = 'relative';
            this.Grid.c._rW = container.getBoundingClientRect().width;
            this.Grid.c._rH = container.getBoundingClientRect().height;
            this.Grid.c.cW = cardItems[0].getBoundingClientRect().width + gutter;
            this.Grid.c.col = Math.max(Math.floor((this.Grid.c._rW - gutter) / this.Grid.c.cW), 1);
            this.Grid.c.rW = this.Grid.c.cW * this.Grid.c.col + gutter;
            container.style.width = `${this.Grid.c.rW}px`;
            (cardItems as NodeListOf<HTMLElement>).forEach((item) => {
                item.style.position = `absolute`;
                item.style.margin = '0';
            });
            this.Grid.cal(container, cardItems, gutter);
        },
        recal: () => {
            const { container, cardItems, gutter } = this.Grid;
            if (!container) return false;
            if (!cardItems || cardItems.length === 0) return false;
            container.style.width = '';
            this.Grid.c.cW = cardItems[0].getBoundingClientRect().width + gutter;
            this.Grid.c.col = Math.max(Math.floor((this.Grid.c._rW - gutter) / this.Grid.c.cW), 1);
            this.Grid.c.rW = this.Grid.c.cW * this.Grid.c.col + gutter;
            container.style.width = `${this.Grid.c.rW}px`;
            this.Grid.cal(container, cardItems, gutter);
        },
        cal: (container: HTMLDivElement, cardItems: NodeListOf<HTMLElement>, gutter: number) => {
            this.Grid.c.posXs = [];
            this.Grid.c.posYs = [];
            for (let g = 0; g < this.Grid.c.col; ++g) {
                this.Grid.c.posXs.push(g * this.Grid.c.cW + gutter);
                this.Grid.c.posYs.push(gutter);
            }
            (cardItems as NodeListOf<HTMLElement>).forEach((item) => {
                let itemIndex = this.Grid.c.posYs
                    .slice(0)
                    .sort((a, b) => a - b)
                    .shift();
                if (itemIndex) {
                    itemIndex = this.Grid.c.posYs.indexOf(itemIndex);
                    const posX = this.Grid.c.posXs[itemIndex];
                    const posY = this.Grid.c.posYs[itemIndex];
                    item.style.transform = `translate(${posX}px,${posY}px)`;
                    this.Grid.c.posYs[itemIndex] += item.getBoundingClientRect().height + gutter;
                }
            });
            container.style.display = '';
            this.Grid.c.rH =
                this.Grid.c.posYs
                    .slice(0)
                    .sort((a, b) => a - b)
                    .pop() ?? this.Grid.c._rH;
            container.style.height = `${this.Grid.c.rH}px`;
        },
    };
    componentDidMount() {
        this.Grid.container = this.CardList.current;
        this.Grid.cardItems =
            this.Grid.container?.querySelectorAll(`.${Style.CardList} > *`) ?? null;
        this.Grid.gutter =
            typeof this.props.gutter === 'number' &&
            isFinite(this.props.gutter) &&
            Math.floor(this.props.gutter) === this.props.gutter
                ? this.props.gutter
                : 0;
        // if not mobile
        if (
            this.Grid.cardItems &&
            (this.Grid.container?.getBoundingClientRect().width ?? 0) >
                this.Grid.cardItems[0].getBoundingClientRect().width * 2 + this.Grid.gutter * 3
        )
            this.Grid.mount();
    }
    render() {
        return (
            <>
                <div className={Style.Container} id={this.props.id}>
                    <div className={Style.Identity}>
                        <img src={background} alt='fill' className={Style.AuthorIcon} />
                        <div className={Style.AuthorName}>{this.props.title}</div>
                    </div>
                    <div className={Style.CardList} ref={this.CardList}>
                        {this.props.cardsData.map((data, key) => (
                            <CardD {...data} key={key} onChange={this.Grid.recal} />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default CardList;
