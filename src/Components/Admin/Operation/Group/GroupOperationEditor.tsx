import { gql, useMutation } from '@apollo/client';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { CreateGroupMutation, CreateGroupMutationVariables, GroupKind } from '../../../../API';
import { createGroup } from '../../../../graphql/mutations';
import { adminClient } from '../../../../GraphqlClient';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import Style from '../../AdminUI.module.scss';
import { GroupKindDisplayValue, AdminGroupObject } from '../../types/GroupModel';

const TextFieldGroupID = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new AdminGroupObject(), state.Group);
        payload.groupID = e.target.value;
        dispatch({ type: 'GroupObject', payload });
    }
    const disabled = state.GOH.DisableEditor || state.GOH.CurrentOperation === 'UPDATE';
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='groupID'
            value={state.Group.groupID}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const TextFieldGroupKind = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) {
        const payload = Object.assign(new AdminGroupObject(), state.Group);
        payload.groupKind = e.target.value as GroupKind;
        dispatch({ type: 'GroupObject', payload });
    }
    const disabled = state.GOH.DisableEditor;
    return (
        <FormControl margin='dense' className={className} disabled={disabled}>
            <InputLabel>groupKind</InputLabel>
            <Select
                MenuProps={{ disableScrollLock: true }}
                value={state.Group.groupKind}
                onChange={onChange}
            >
                {Object.entries(GroupKindDisplayValue).map(([value, displayValue], key) => (
                    <MenuItem key={key} value={value}>
                        {displayValue}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
const TextFieldGroupName = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new AdminGroupObject(), state.Group);
        payload.groupName = e.target.value;
        dispatch({ type: 'GroupObject', payload });
    }
    const disabled = state.GOH.DisableEditor;
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='groupName'
            value={state.Group.groupName}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const TextFieldIcon = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new AdminGroupObject(), state.Group);
        payload.icon = e.target.value;
        dispatch({ type: 'GroupObject', payload });
    }
    const disabled = state.GOH.DisableEditor;
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='icon'
            value={state.Group.icon}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const TextFieldThumb = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new AdminGroupObject(), state.Group);
        payload.thumb = e.target.value;
        dispatch({ type: 'GroupObject', payload });
    }
    const disabled = state.GOH.DisableEditor;
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='thumb'
            value={state.Group.thumb}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const TextFieldTags = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const payload = Object.assign(new AdminGroupObject(), state.Group);
        payload._tags = e.target.value;
        payload.tagsToArray();
        dispatch({ type: 'GroupObject', payload });
    }
    const disabled = state.GOH.DisableEditor;
    return (
        <TextField
            margin='dense'
            className={className}
            type='text'
            label='tags(?optional)'
            value={state.Group._tags}
            onChange={onChange}
            disabled={disabled}
        />
    );
};
const CancelButton = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        dispatch({
            type: 'GOH',
            payload: { CurrentOperation: null, DisableEditor: true, DisableSubmit: true },
        });
        const groups = state.AllGroup.GroupChoices().filter(
            (group) => group.groupID === state.Group.groupID,
        );
        if (groups.length > 0) dispatch({ type: 'GroupObject', payload: groups[0] });
        else dispatch({ type: 'GroupObject', payload: new AdminGroupObject() });
    }
    const disabled = state.GOH.DisableSubmit;
    return (
        <Button className={className} onClick={onClick} disabled={disabled}>
            Cancel
        </Button>
    );
};
const SubmitButton = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const disabled = state.GOH.DisableSubmit;
    return (
        <Button
            className={className}
            type='submit'
            variant='contained'
            color='secondary'
            disabled={disabled}
        >
            Submit
        </Button>
    );
};
export const OperationEditor = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    const [CreateGroup] = useMutation<CreateGroupMutation, CreateGroupMutationVariables>(
        gql(createGroup),
        { client: adminClient },
    );
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        state.Group.Create(CreateGroup, state.Username);
        dispatch({
            type: 'GOH',
            payload: { CurrentOperation: null, DisableEditor: true, DisableSubmit: true },
        });
    }
    return (
        <form className={className} onSubmit={onSubmit}>
            <div className={Style.FormTextFieldGroup}>
                <TextFieldGroupID className={Style.Form_groupID} />
                <TextFieldGroupKind className={Style.Form_groupKind} />
                <TextFieldGroupName className={Style.Form_groupName} />
                <TextFieldIcon className={Style.Form_icon} />
                <TextFieldThumb className={Style.Form_thumb} />
                <TextFieldTags className={Style.Form__tags} />
            </div>
            <div className={Style.FormButtonGroup}>
                <CancelButton className={Style.Form_cancel} />
                <SubmitButton className={Style.Form_submit} />
            </div>
        </form>
    );
};
