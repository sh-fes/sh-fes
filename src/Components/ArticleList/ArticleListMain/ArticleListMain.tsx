import React, { Key, useEffect, useRef } from 'react';
import Style from '../../../App.module.scss';
import { ArticleModel } from '../../../types';
import { ArrayObject } from '../../../util';
import { SortGrid } from '../../MiniGrid';
import { ArticleListItem } from '../ArticleListItem';

interface Props {
    gutter: number;
    articles: ArticleModel[];
}

const ArticleListMain = ({ gutter, articles }: Props) => {
    const container = useRef<HTMLDivElement>(null);
    const grid = useRef<SortGrid | null>(null);
    const items = useRef<ArrayObject<HTMLElement | null>>({});
    const title = 'otkrickey';
    // eslint-disable-next-line
    const binder: Key[] = [];
    const onChange = {
        bind: (key: Key) => {
            binder.push(key);
        },
        unbind: (key: Key) => {
            grid.current?.unbind(key);
        },
        update: (key: Key, height: number) => {
            grid.current?.update(key, height);
        },
    };
    useEffect(() => {
        if (container.current && !Object.values(items.current).includes(null)) {
            grid.current = new SortGrid({
                container: container.current,
                itemElements: items.current as ArrayObject<HTMLElement>,
                gutter,
            });
        }
        binder.forEach((key) => {
            grid.current?.bind(key);
        });
        return () => {
            if (!grid.current) return;
            grid.current = grid.current.unmount();
        };
    }, [container, items, binder, gutter]);
    return (
        <div ref={container} className={Style.CardList}>
            {articles.map((data, key) => (
                <ArticleListItem
                    id={key}
                    key={key}
                    ref={(ref) => (items.current[key] = ref)}
                    onChange={onChange}
                    options={{
                        key: title,
                        articleID: data.articleID,
                        title: data.title,
                        description:
                            'あｓｆｈｖｂｓだうｆｓｄさｈｄｂぁｖｆｈぇｖｓｆｌじゃヴぇｊｌｗｈｆｖｄｓｌｊはｆｂｖ',
                        thumb: data.thumb,
                    }}
                />
            ))}
        </div>
    );
};

export default ArticleListMain;
