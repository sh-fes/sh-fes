import { TableCell, TableRow } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { ArticleObject } from '../../types/ArticleObject';

interface ArticleTableCellsProps {
    article?: ArticleObject;
    th?: boolean;
    icon?: ReactNode;
    style?: React.CSSProperties;
}
export const ArticleTableCells = ({
    article = new ArticleObject(),
    th = false,
    icon,
    style,
}: ArticleTableCellsProps) => {
    const displayValues = article.tableDisplayValue();
    return (
        <TableRow style={style}>
            <TableCell>{icon}</TableCell>
            {displayValues.map(({ key, value }, i) => (
                <TableCell key={i}>{th ? key : value}</TableCell>
            ))}
        </TableRow>
    );
};
