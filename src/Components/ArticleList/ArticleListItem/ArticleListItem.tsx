import { IconButton } from '@material-ui/core';
import React, { Key, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../../../App.module.scss';
import { background } from '../../../public';

interface ArticleListItemProps {
    options: ArticleListItemOptions;
    onChange: {
        bind: (key: Key) => void;
        unbind: (key: Key) => void;
        update: (key: Key, height: number) => void;
    };
    id: Key;
}
interface ArticleListItemOptions {
    articleID: string;
    title: string;
    description: string;
    thumb: string;
    key: string;
}

const ArticleListItem = React.forwardRef<HTMLElement | null, ArticleListItemProps>((props, ref) => {
    const { id: key, options, onChange } = props;
    const [active, setActive] = useState(false);
    const description = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        onChange.bind(key);
        return () => {
            onChange.unbind(key);
        };
    }, [key, onChange]);
    useEffect(() => {
        const height = active ? description.current?.clientHeight ?? 0 : 0;
        onChange.update(key, height);
    }, [active, key, onChange]);
    return (
        <article className={Style.Card} ref={ref}>
            <div className={Style.HeadContainer}>
                <div className={Style.Head}>
                    <img className={Style.Thumbnail} src={background} alt='img' />
                    <h4 className={Style.Title}>
                        <Link className={Style.TitleLink} to='/index'>
                            {options.title}
                        </Link>
                    </h4>
                </div>
            </div>
            <div
                className={Style.Body}
                style={{ height: active ? description.current?.clientHeight ?? 0 : 0 }}
            >
                <p className={Style.Description} ref={description}>
                    {options.description}
                </p>
            </div>
            <div className={Style.Foot}>
                <Link className={Style.More} to='/'>
                    記事を見る
                </Link>
                <IconButton
                    className={Style.Pull}
                    aria-label='delete'
                    type='button'
                    onClick={() => setActive((b) => !b)}
                >
                    <svg
                        className={Style.Pull_SVG}
                        height={18}
                        width={18}
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            className={Style.Pull_SVG_Path}
                            d='M12 7L19.7942 15.25H4.20577L12 7Z'
                            fill='black'
                        />
                    </svg>
                </IconButton>
            </div>
        </article>
    );
});

export default ArticleListItem;
