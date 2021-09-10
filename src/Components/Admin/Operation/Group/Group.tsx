import { SubscriptionHookOptions, useLazyQuery, useSubscription } from '@apollo/client';
import { Paper } from '@material-ui/core';
import gql from 'graphql-tag';
import React, { useEffect } from 'react';
import { ListGroupsQueryVariables } from '../../../../API';
import { defaultClient } from '../../../../GraphqlClient';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import Style from '../../AdminUI.module.scss';
import { ListGroupsQuery } from '../../API';
import { GroupInitialProperties, GroupObject } from '../../types';
import { GroupField } from './GroupField';
import { OperationButton } from './GroupOperationButton';
import { GroupPropertiesTable } from './GroupPropertiesTable';
import { OperationEditor } from './GroupTextFields';

const CRUDGroup = () => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    const GraphqlListGroups = `query ListGroups($filter:ModelGroupFilterInput,$limit:Int,$nextToken:String){listGroups(filter:$filter,limit:$limit,nextToken:$nextToken){items{id,groupID,groupName,groupKind,tags,icon,thumb,author,createdAt,isActive,updatedAt,articles{items{id,articleID,title,tags,thumb,author,createdAt,groupID,isActive,updatedAt},nextToken}}}}`;
    const [getGroupList] = useLazyQuery<ListGroupsQuery, ListGroupsQueryVariables>(
        gql(GraphqlListGroups),
        {
            client: defaultClient,
            fetchPolicy: 'no-cache',
            onCompleted: (data) => {
                const groups = data.listGroups.items;
                const groupIDs = [...new Set(groups.map((item) => item.groupID))];
                const uniqueGroups = groupIDs.map((groupID) =>
                    groups
                        .filter((v) => v.groupID === groupID)
                        .reduce(
                            (a, b) => (a && new Date(a.createdAt) > new Date(b.createdAt) ? a : b),
                            GroupInitialProperties,
                        ),
                );
                const GroupChoices = uniqueGroups.map((group) => new GroupObject(group));
                dispatch({ type: 'GOH', payload: { GroupChoices } });
            },
        },
    );
    const SubscriptionOptions: SubscriptionHookOptions = {
        client: defaultClient,
        onSubscriptionData: () => {
            getGroupList();
        },
    };
    useSubscription(gql('subscription Group{onCreateGroup{id}}'), SubscriptionOptions);
    useSubscription(gql('subscription Group{onUpdateGroup{id}}'), SubscriptionOptions);
    useSubscription(gql('subscription Group{onDeleteGroup{id}}'), SubscriptionOptions);
    useEffect(() => {
        getGroupList();
    }, [getGroupList]);
    return state.Username ? (
        <>
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
        </>
    ) : (
        <p>Loading Username</p>
    );
};
export default CRUDGroup;
