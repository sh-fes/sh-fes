import { Paper } from '@material-ui/core';
import React from 'react';
import { useAdminState } from '../../AdminContext';
import Style from '../../AdminUI.module.scss';
import { ArticleField } from './ArticleField';
import { OperationButton } from './ArticleOperationButton';
import { OperationEditor } from './ArticleOperationEditor';
import { ArticlePropertiesTable } from './ArticlePropertiesTable';

const Article = () => {
    const state = useAdminState();
    return state.Username ? (
        <Paper className={Style.ObjectEditorContainer}>
            <div className={Style.LeftContainer}>
                <ArticlePropertiesTable className={Style.TableContainer} />
            </div>
            <div className={Style.RightContainer}>
                <Paper className={Style.OperationSelectorContainer}>
                    <ArticleField className={Style.AutoComplete} />
                    <OperationButton className={Style.ButtonGroup} />
                </Paper>
                <Paper className={Style.OperationEditorContainer}>
                    <OperationEditor className={Style.Form} />
                </Paper>
            </div>
        </Paper>
    ) : (
        <p>Loading Username</p>
    );
};
export default Article;
