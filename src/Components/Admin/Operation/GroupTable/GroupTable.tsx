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
            <Paper className={Style.GroupTableContainer}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <GroupTableCells th />
                        </TableHead>
                        <TableBody>
                            {state.AllGroup.GroupHistory().map((GroupsByGroupID) => (
                                <GroupTableRows groupHistory={GroupsByGroupID} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

export default GroupTable;
