import { useLazyQuery } from '@apollo/client';
import { Button, ButtonGroup } from '@material-ui/core';
import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import { GroupByGroupIDQueryVariables } from '../../../../API';
import { defaultClient } from '../../../../GraphqlClient';
import { GroupByGroupIDQuery } from '../../../../types';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import { AdminGroupObject } from '../../types/GroupModel';

export const OperationButton = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    const [DisableCreate, sCreate] = useState(true);
    const [DisableUpdate, sUpdate] = useState(true);
    const [DisableActivate, sActivate] = useState(true);
    const [DisableDeactivate, sDeactivate] = useState(true);
    const GraphqlGroupByGroupID = `query LG($groupID:ID!){GroupByGroupID(groupID:$groupID,sortDirection:DESC){items{id,groupID,groupName,groupKind,tags,icon,thumb,author,createdAt,isActive,updatedAt,articles{items{id,articleID,title,tags,thumb,author,createdAt,groupID,isActive,updatedAt},nextToken}}}}`;
    const [getGroupListByGroupID] = useLazyQuery<GroupByGroupIDQuery, GroupByGroupIDQueryVariables>(
        gql(GraphqlGroupByGroupID),
        {
            client: defaultClient,
            fetchPolicy: 'no-cache',
            onCompleted: (data) => {
                const archive = data.GroupByGroupID.items.filter((item) => item.isActive);
                if (archive.length > 0) {
                    const group = archive[0];
                    const payload = new AdminGroupObject(group);
                    payload.isActive = true;
                    dispatch({ type: 'GroupObject', payload });
                }
            },
        },
    );
    useEffect(
        () => sCreate(state.GOH.CurrentOperation ? true : state.Group.groupID !== ''),
        [sCreate, state.GOH.CurrentOperation, state.Group.groupID],
    );
    useEffect(
        () => sUpdate(state.GOH.CurrentOperation ? true : state.Group.groupID === ''),
        [sUpdate, state.GOH.CurrentOperation, state.Group.groupID],
    );
    useEffect(
        () =>
            sActivate(
                state.GOH.CurrentOperation
                    ? true
                    : state.Group.groupID === ''
                    ? true
                    : state.Group.isActive,
            ),
        [sActivate, state.GOH.CurrentOperation, state.Group.groupID, state.Group.isActive],
    );
    useEffect(
        () =>
            sDeactivate(
                state.GOH.CurrentOperation
                    ? true
                    : state.Group.groupID === ''
                    ? true
                    : !state.Group.isActive,
            ),
        [sDeactivate, state.GOH.CurrentOperation, state.Group.groupID, state.Group.isActive],
    );
    function Create() {
        dispatch({
            type: 'GOH',
            payload: { CurrentOperation: 'CREATE', DisableEditor: false, DisableSubmit: false },
        });
        const payload = new AdminGroupObject();
        dispatch({ type: 'GroupObject', payload });
    }
    function Update() {
        dispatch({
            type: 'GOH',
            payload: { CurrentOperation: 'UPDATE', DisableEditor: false, DisableSubmit: false },
        });
    }
    function Activate() {
        dispatch({
            type: 'GOH',
            payload: { CurrentOperation: 'RECREATE', DisableEditor: true, DisableSubmit: false },
        });
        const variables: GroupByGroupIDQueryVariables = { groupID: state.Group.groupID };
        getGroupListByGroupID({ variables });
    }
    function Deactivate() {
        dispatch({
            type: 'GOH',
            payload: { CurrentOperation: 'DELETE', DisableEditor: true, DisableSubmit: false },
        });
        const payload = new AdminGroupObject();
        payload.groupID = state.Group.groupID;
        payload.groupName = state.Group.groupName;
        payload.author = state.Username;
        payload.isActive = false;
        dispatch({ type: 'GroupObject', payload });
    }
    return (
        <ButtonGroup variant='contained' className={className}>
            <Button onClick={Create} disabled={DisableCreate}>
                作成
            </Button>
            <Button onClick={Update} disabled={DisableUpdate}>
                編集
            </Button>
            <Button onClick={Activate} disabled={DisableActivate}>
                有効化
            </Button>
            <Button onClick={Deactivate} disabled={DisableDeactivate}>
                無効化
            </Button>
        </ButtonGroup>
    );
};
