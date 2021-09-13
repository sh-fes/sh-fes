import { Paper, Table, TableBody, TableContainer, TableHead } from '@material-ui/core';
import React from 'react';
import { useAdminState } from '../../AdminContext';
import Style from '../../AdminUI.module.scss';
import { ArticleTableCells } from './ArticleTableCells';
import { ArticleTableRows } from './ArticleTableRows';

const ArticleTable = () => {
    const state = useAdminState();
    return (
        <>
            <Paper className={Style.ObjectTableContainer}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <ArticleTableCells th />
                        </TableHead>
                        <TableBody>
                            {state.AllArticle.ArticleHistory().map((articleHistory) => (
                                <ArticleTableRows
                                    key={articleHistory.head.id}
                                    articleHistory={articleHistory}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

export default ArticleTable;
