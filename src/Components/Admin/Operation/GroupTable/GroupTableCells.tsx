import { TableCell, TableRow } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { GroupObject } from '../../types';

interface GroupTableCellsProps {
    group?: GroupObject;
    th?: boolean;
    icon?: ReactNode;
    style?: React.CSSProperties;
}
export const GroupTableCells = ({
    group = new GroupObject(),
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
