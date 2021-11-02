import { Icon, IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React, { useState } from 'react';
import { ArticleHistory } from '../../types/ArticleModelArray';
import { ArticleTableCells } from './ArticleTableCells';

export const ArticleTableRows = ({ articleHistory }: { articleHistory: ArticleHistory }) => {
    const [open, setOpen] = useState(false);
    const hasHistory = articleHistory.history.length > 0;
    const arrowIcon = (
        <IconButton size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
    );
    const blankIcon = <Icon />;
    const history = articleHistory.history.map((article) => (
        <ArticleTableCells key={article.id} article={article} icon={blankIcon} />
    ));
    return (
        <>
            <ArticleTableCells
                article={articleHistory.head}
                icon={hasHistory ? arrowIcon : blankIcon}
                style={{
                    borderLeft: 'solid 4px #000000',
                }}
            />
            {open ? history : null}
        </>
    );
};
