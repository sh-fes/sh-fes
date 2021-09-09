import {
    gql,
    SubscriptionHookOptions,
    useLazyQuery,
    useMutation,
    useSubscription,
} from '@apollo/client';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
    Button,
    ButtonGroup,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from '@material-ui/core';
import Autocomplete, {
    AutocompleteRenderInputParams,
    createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { FilterOptionsState } from '@material-ui/lab/useAutocomplete';
import React, { useEffect, useState } from 'react';
import {
    CreateGroupInput,
    CreateGroupMutation,
    CreateGroupMutationVariables,
    GroupByGroupIDQueryVariables,
    GroupKind,
    ListGroupsQueryVariables,
} from '../../../../API';
import { createGroup } from '../../../../graphql/mutations';
import { adminClient, defaultClient } from '../../../../GraphqlClient';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import Style from '../../AdminUI.module.scss';
import { Group, GroupByGroupIDQuery, ListGroupsQuery } from '../../API';
import { InitialValue } from '../../InitialValue';
import { GroupKindDisplayValue, Payload_Group } from '../../types';
import { GroupDisplayValue } from '../../util';

const CRUDGroup = () => {
    /** ---------------------------------------- [State] Global ---------------------------------------- **/
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    /** ---------------------------------------- [State] AutoComplete ---------------------------------------- **/
    const [GroupChoices, setGroupChoices] = useState<Payload_Group[]>([]);
    /** ---------------------------------------- [State] Editor ---------------------------------------- **/
    const [disableEditor, setDisableEditor] = useState(true);
    const [disableSubmitter, setDisableSubmitter] = useState(true);
    type CurrentOperationType = 'CREATE' | 'UPDATE' | 'DELETE' | 'RECREATE' | null;
    const [CurrentOperation, setCurrentOperation] = useState<CurrentOperationType>(null);
    /** ---------------------------------------- Query ---------------------------------------- **/
    const GraphqlListGroups = `query ListGroups($filter:ModelGroupFilterInput,$limit:Int,$nextToken:String){listGroups(filter:$filter,limit:$limit,nextToken:$nextToken){items{id,groupID,groupName,groupKind,tags,icon,thumb,author,createdAt,isActive,updatedAt,articles{items{id,articleID,title,tags,thumb,author,createdAt,groupID,isActive,updatedAt},nextToken}}}}`;
    const [getGroupList] = useLazyQuery<ListGroupsQuery, ListGroupsQueryVariables>(
        gql(GraphqlListGroups),
        {
            client: defaultClient,
            fetchPolicy: 'no-cache',
            onCompleted: (data) => setChoicesByGroups(data.listGroups?.items ?? []),
        },
    );
    const GraphqlGroupByGroupID = `query LG($groupID:ID!){GroupByGroupID(groupID:$groupID,sortDirection:DESC){items{id,groupID,groupName,groupKind,tags,icon,thumb,author,createdAt,isActive,updatedAt,articles{items{id,articleID,title,tags,thumb,author,createdAt,groupID,isActive,updatedAt},nextToken}}}}`;
    const [getGroupListByGroupID] = useLazyQuery<GroupByGroupIDQuery, GroupByGroupIDQueryVariables>(
        gql(GraphqlGroupByGroupID),
        {
            client: defaultClient,
            fetchPolicy: 'no-cache',
            onCompleted: (data) => {
                const group = data.GroupByGroupID?.items?.filter((item) => item.isActive)[0];
                if (group) dispatch({ type: 'setGroup', payload: convertGroupToPayload(group) });
            },
        },
    );
    /** ---------------------------------------- Subscription ---------------------------------------- **/
    const SubscriptionOptions: SubscriptionHookOptions = {
        client: defaultClient,
        onSubscriptionData: () => {
            getGroupList();
        },
    };
    useSubscription(gql('subscription Group{onCreateGroup{id}}'), SubscriptionOptions);
    useSubscription(gql('subscription Group{onUpdateGroup{id}}'), SubscriptionOptions);
    useSubscription(gql('subscription Group{onDeleteGroup{id}}'), SubscriptionOptions);
    /** ---------------------------------------- Mutation ---------------------------------------- **/
    const [CreateGroup] = useMutation<CreateGroupMutation, CreateGroupMutationVariables>(
        gql(createGroup),
        { client: adminClient },
    );
    /** ---------------------------------------- Util ---------------------------------------- **/
    function setChoicesByGroups(items: Group[]): void {
        const groupIDs = [...new Set(items.map((item) => item.groupID) ?? [])];
        const _uniqueGroups = groupIDs.map((groupID) =>
            items
                .filter((v) => v.groupID === groupID)
                .reduce(
                    (a, b) => (a && new Date(a.createdAt) > new Date(b.createdAt) ? a : b),
                    InitialValue.Group,
                ),
        );
        const newChoices = _uniqueGroups.map((e) => convertGroupToPayload(e));
        setGroupChoices(newChoices);
    }
    function convertGroupToPayload(e: Group): Payload_Group {
        return {
            ...InitialValue.Group,
            __typename: e.__typename,
            id: e.id,
            groupID: e.groupID,
            groupName: e.groupName,
            groupKind: e.groupKind,
            tags: e.tags,
            _tags: e.tags.join(','),
            icon: e.icon,
            thumb: e.thumb,
            author: e.author,
            createdAt: e.createdAt,
            isActive: e.isActive,
            updatedAt: e.updatedAt,
            articles: e.articles,
        };
    }
    function convertPayloadToInput(s: Payload_Group): CreateGroupInput {
        return {
            groupID: s.groupID,
            groupName: s.groupName,
            groupKind: s.groupKind,
            tags: s._tags.split(',').filter((e) => e !== '') ?? [],
            icon: s.icon,
            thumb: s.thumb,
            author: state.Username,
            isActive: s.isActive,
        };
    }
    /** ---------------------------------------- CRUD ---------------------------------------- **/
    const CRUDButton = (): JSX.Element => {
        const [D_Create, sCreate] = useState(true);
        const [D_Update, sUpdate] = useState(true);
        const [D_Activate, sActivate] = useState(true);
        const [D_Deactivate, sDeactivate] = useState(true);
        const sCreateCallback: React.EffectCallback = () =>
            sCreate(CurrentOperation ? true : state.Group.groupID !== '');
        const sUpdateCallback: React.EffectCallback = () =>
            sUpdate(CurrentOperation ? true : state.Group.groupID === '');
        const sActivateCallback: React.EffectCallback = () =>
            sActivate(
                CurrentOperation ? true : state.Group.groupID === '' ? true : state.Group.isActive,
            );
        const sDeactivateCallback: React.EffectCallback = () =>
            sDeactivate(
                CurrentOperation ? true : state.Group.groupID === '' ? true : !state.Group.isActive,
            );
        useEffect(sCreateCallback, [sCreate]);
        useEffect(sUpdateCallback, [sUpdate]);
        useEffect(sActivateCallback, [sActivate]);
        useEffect(sDeactivateCallback, [sDeactivate]);
        function Create(): void {
            setCurrentOperation('CREATE');
            dispatch({ type: 'setGroup', payload: InitialValue.Group });
            setDisableEditor(false);
            setDisableSubmitter(false);
        }
        function Update(): void {
            setCurrentOperation('UPDATE');
            setDisableEditor(false);
            setDisableSubmitter(false);
        }
        function Activate(): void {
            setCurrentOperation('RECREATE');
            getGroupListByGroupID({ variables: { groupID: state.Group.groupID } });
            setDisableEditor(true);
            setDisableSubmitter(false);
        }
        function Deactivate(): void {
            setCurrentOperation('DELETE');
            const payload: Payload_Group = {
                ...InitialValue.Group,
                groupID: state.Group.groupID,
                groupName: state.Group.groupName,
                author: state.Username,
                isActive: false,
            };
            dispatch({ type: 'setGroup', payload });
            setDisableEditor(true);
            setDisableSubmitter(false);
        }
        return (
            <ButtonGroup variant='contained' className={Style.ButtonGroup}>
                <Button onClick={Create} disabled={D_Create}>
                    作成
                </Button>
                <Button onClick={Update} disabled={D_Update}>
                    編集
                </Button>
                <Button onClick={Activate} disabled={D_Activate}>
                    有効化
                </Button>
                <Button onClick={Deactivate} disabled={D_Deactivate}>
                    無効化
                </Button>
            </ButtonGroup>
        );
    };
    /** ---------------------------------------- AutoComplete ---------------------------------------- **/
    function handleOnChange(e: React.ChangeEvent<{}>, p: string | Payload_Group | null): void {
        if (typeof p === 'string') {
            setTimeout(() => {
                setCurrentOperation('CREATE');
                dispatch({
                    type: 'setGroup',
                    payload: { ...state.Group, inputValue: p, groupID: p },
                });
                setDisableEditor(false);
                setDisableSubmitter(false);
            });
        } else if (p?.inputValue) {
            setCurrentOperation('CREATE');
            dispatch({
                type: 'setGroup',
                payload: { ...InitialValue.Group, inputValue: p.inputValue, groupID: p.inputValue },
            });
            setDisableEditor(false);
            setDisableSubmitter(false);
        } else if (p) {
            dispatch({ type: 'setGroup', payload: { ...p, _tags: p.tags?.join(',') ?? '' } });
        }
    }
    function handleGetOptionLabel(p: Payload_Group) {
        if (typeof p === 'string') return p;
        else if (p.inputValue) return p.inputValue;
        else return p.groupID;
    }
    function handleRenderOption(e: Payload_Group) {
        return `${e.groupID} (${e.groupName})${e.isActive ? '' : ' *'}`;
    }
    function handleRenderInput(params: AutocompleteRenderInputParams): JSX.Element {
        return <TextField {...params} label='Enter GroupID' variant='outlined' />;
    }
    /** ---------------------------------------- AutoComplete Filter ---------------------------------------- **/
    const filter = createFilterOptions<Payload_Group>();
    function filterOptions(
        options: Payload_Group[],
        params: FilterOptionsState<Payload_Group>,
    ): Payload_Group[] {
        const filtered = filter(options, params);
        if (params.inputValue !== '') {
            filtered.push({
                ...InitialValue.Group,
                inputValue: params.inputValue,
                groupID: `Add "${params.inputValue}"`,
            });
        }
        return filtered;
    }
    /** ---------------------------------------- Editor ---------------------------------------- **/
    function handleCancel() {
        setCurrentOperation(null);
        setDisableEditor(true);
        setDisableSubmitter(true);
        dispatch({ type: 'setGroup', payload: InitialValue.Group });
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setCurrentOperation(null);
        setDisableEditor(true);
        setDisableSubmitter(true);
        CreateGroup({ variables: { input: convertPayloadToInput(state.Group) } });
        dispatch({ type: 'setGroup', payload: InitialValue.Group });
    }
    /** ---------------------------------------- onLoad ---------------------------------------- **/
    useEffect(() => {
        getGroupList();
    }, [getGroupList]);
    onAuthUIStateChange((nextAuthState, authData) => {
        if (nextAuthState === AuthState.SignedIn && authData?.hasOwnProperty('username')) {
            dispatch({
                type: 'setUsername',
                payload: (authData as { username: string }).username,
            });
        }
    });
    /** ---------------------------------------- Render ---------------------------------------- **/
    const RenderAutoComplete: JSX.Element = (
        <Autocomplete<Payload_Group, false, undefined, true>
            className={Style.AutoComplete}
            value={state.Group}
            onChange={handleOnChange}
            filterOptions={filterOptions}
            options={GroupChoices}
            getOptionLabel={handleGetOptionLabel}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={handleRenderOption}
            style={{ width: 300 }}
            freeSolo
            renderInput={handleRenderInput}
            disabled={CurrentOperation ? true : false}
        />
    );
    const OperationEditor = (
        <form className={Style.Form} onSubmit={handleSubmit}>
            <div className={Style.FormTextFieldGroup}>
                <TextField
                    margin='dense'
                    className={Style.Form_groupID}
                    type='text'
                    label='groupID'
                    value={state.Group.groupID}
                    onChange={(e) =>
                        dispatch({
                            type: 'setGroup',
                            payload: { ...state.Group, groupID: e.target.value },
                        })
                    }
                    disabled={disableEditor || CurrentOperation === 'UPDATE'}
                />
                <FormControl
                    margin='dense'
                    className={Style.Form_groupKind}
                    disabled={disableEditor}
                >
                    <InputLabel>groupKind</InputLabel>
                    <Select
                        MenuProps={{ disableScrollLock: true }}
                        value={state.Group.groupKind}
                        onChange={(e) =>
                            dispatch({
                                type: 'setGroup',
                                payload: {
                                    ...state.Group,
                                    groupKind: e.target.value as GroupKind,
                                },
                            })
                        }
                    >
                        {Object.entries(GroupKindDisplayValue).map(([groupKind, type], key) => (
                            <MenuItem key={key} value={groupKind}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    margin='dense'
                    className={Style.Form_groupName}
                    type='text'
                    label='groupName'
                    value={state.Group.groupName}
                    onChange={(e) =>
                        dispatch({
                            type: 'setGroup',
                            payload: { ...state.Group, groupName: e.target.value },
                        })
                    }
                    disabled={disableEditor}
                />
                <TextField
                    margin='dense'
                    className={Style.Form_icon}
                    type='text'
                    label='icon'
                    value={state.Group.icon}
                    onChange={(e) =>
                        dispatch({
                            type: 'setGroup',
                            payload: { ...state.Group, icon: e.target.value },
                        })
                    }
                    disabled={disableEditor}
                />
                <TextField
                    margin='dense'
                    className={Style.Form_thumb}
                    type='text'
                    label='thumb'
                    value={state.Group.thumb}
                    onChange={(e) =>
                        dispatch({
                            type: 'setGroup',
                            payload: { ...state.Group, thumb: e.target.value },
                        })
                    }
                    disabled={disableEditor}
                />
                <TextField
                    margin='dense'
                    className={Style.Form__tags}
                    type='text'
                    label='tags(?optional)'
                    value={state.Group._tags}
                    onChange={(e) =>
                        dispatch({
                            type: 'setGroup',
                            payload: { ...state.Group, _tags: e.target.value },
                        })
                    }
                    disabled={disableEditor}
                />
            </div>
            <div className={Style.FormButtonGroup}>
                <Button onClick={handleCancel} disabled={disableSubmitter}>
                    Cancel
                </Button>
                <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    disabled={disableSubmitter}
                >
                    Submit
                </Button>
            </div>
        </form>
    );
    const GroupPropertiesTable = (
        <TableContainer className={Style.TableContainer} component={Paper}>
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
                    {GroupDisplayValue(state.Group).map((row, key) => (
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
    return state.Username ? (
        <>
            <Paper className={Style.GroupRootContainer}>
                <div className={Style.LeftContainer}>{GroupPropertiesTable}</div>
                <div className={Style.RightContainer}>
                    <Paper className={Style.OperationSelectorContainer}>
                        {RenderAutoComplete}
                        <CRUDButton />
                    </Paper>
                    <Paper className={Style.OperationEditorContainer}>{OperationEditor}</Paper>
                </div>
            </Paper>
        </>
    ) : (
        <p>Loading Username</p>
    );
};

export default CRUDGroup;
