import { TableCell, TableRow } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { AdminGroupObject } from '../../types/GroupModel';

interface GroupTableCellsProps {
    group?: AdminGroupObject;
    th?: boolean;
    icon?: ReactNode;
    style?: React.CSSProperties;
}
export const GroupTableCells = ({
    group = new AdminGroupObject(),
    th = false,
    icon,
    style,
}: GroupTableCellsProps) => {
    const displayValues = group.tableDisplayValue();
    return (
        <TableRow style={style}>
            <TableCell>{icon}</TableCell>
            {displayValues.map(({ key, value }, i) => (
                <TableCell key={i}>{th ? key : value}</TableCell>
            ))}
        </TableRow>
    );
};
