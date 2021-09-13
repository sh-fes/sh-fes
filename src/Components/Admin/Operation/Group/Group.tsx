import { Paper } from '@material-ui/core';
import React from 'react';
import { useAdminState } from '../../AdminContext';
import Style from '../../AdminUI.module.scss';
import { GroupField } from './GroupField';
import { OperationButton } from './GroupOperationButton';
import { OperationEditor } from './GroupOperationEditor';
import { GroupPropertiesTable } from './GroupPropertiesTable';

const Group = () => {
    const state = useAdminState();
    return state.Username ? (
        <Paper className={Style.GroupRootContainer}>
            <div className={Style.LeftContainer}>
                <GroupPropertiesTable className={Style.TableContainer} />
            </div>
            <div className={Style.RightContainer}>
                <Paper className={Style.OperationSelectorContainer}>
                    <GroupField className={Style.AutoComplete} />
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
export default Group;
