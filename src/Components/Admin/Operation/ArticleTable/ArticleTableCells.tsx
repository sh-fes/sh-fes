import { TableCell, TableRow } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { AdminArticleModel } from '../../types';

interface ArticleTableCellsProps {
    article?: AdminArticleModel;
    th?: boolean;
    icon?: ReactNode;
    style?: React.CSSProperties;
}
export const ArticleTableCells = ({
    article = new AdminArticleModel(),
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
