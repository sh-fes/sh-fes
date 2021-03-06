import { Paper, Table, TableBody, TableContainer, TableHead } from '@material-ui/core';
import React from 'react';
import { useAdminState } from '../../AdminContext';
import Style from '../../AdminUI.module.scss';
import { GroupTableCells } from './GroupTableCells';
import { GroupTableRows } from './GroupTableRows';

const GroupTable = () => {
    const state = useAdminState();
    return (
        <>
            <Paper className={Style.ObjectTableContainer}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <GroupTableCells th />
                        </TableHead>
                        <TableBody>
                            {state.AllGroup.GroupHistory().map((groupHistory) => (
                                <GroupTableRows
                                    key={groupHistory.head.id}
                                    groupHistory={groupHistory}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

export default GroupTable;
