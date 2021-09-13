import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import React from 'react';
import { useAdminState } from '../../AdminContext';

export const ArticlePropertiesTable = ({ className }: { className?: string }) => {
    const state = useAdminState();
    return (
        <TableContainer className={className} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell component='th'>Key</TableCell>
                        <TableCell component='th' align='right'>
                            Value
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.Article.defaultDisplayValue().map((row, key) => (
                        <TableRow key={key}>
                            <TableCell component='th' scope='row'>
                                {row.key}
                            </TableCell>
                            <TableCell align='right'>{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
