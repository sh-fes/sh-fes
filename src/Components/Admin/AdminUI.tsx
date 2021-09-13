import { gql, SubscriptionHookOptions, useLazyQuery, useSubscription } from '@apollo/client';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Paper, Typography } from '@material-ui/core';
import React, { Component, useEffect } from 'react';
import { ListGroupsQueryVariables } from '../../API';
import { defaultClient } from '../../GraphqlClient';
import { AdminProvider, useAdminDispatch } from './AdminContext';
import Style from './AdminUI.module.scss';
import { ListGroupsQuery } from './types/API';
import { AdminDebugUI } from './Debug';
import { Group as GroupOperation, GroupTable } from './Operation';
import { GroupObject } from './types/GroupObject';
import { GroupObjectArray } from './types/GroupObjectArray';

const Title = ({ className }: { className?: string }) => (
    <Typography className={className} variant='h2' component='h1' gutterBottom>
        Admin UI
    </Typography>
);

const AdminMain = () => {
    const dispatch = useAdminDispatch();
    // Username
    onAuthUIStateChange((nextAuthState, authData) => {
        if (nextAuthState === AuthState.SignedIn && authData?.hasOwnProperty('username')) {
            const payload = (authData as { username: string }).username;
            dispatch({ type: 'Username', payload });
        }
    });
    // Fetch Group Data
    const GraphqlListGroups = `query ListGroups($filter:ModelGroupFilterInput,$limit:Int,$nextToken:String){listGroups(filter:$filter,limit:$limit,nextToken:$nextToken){items{id,groupID,groupName,groupKind,tags,icon,thumb,author,createdAt,isActive,updatedAt,articles{items{id,articleID,title,tags,thumb,author,createdAt,groupID,isActive,updatedAt},nextToken}}}}`;
    const [getGroupList] = useLazyQuery<ListGroupsQuery, ListGroupsQueryVariables>(
        gql(GraphqlListGroups),
        {
            client: defaultClient,
            fetchPolicy: 'no-cache',
            onCompleted: (data) => {
                const groups = data.listGroups.items;
                const GroupObjects = groups.map((group) => new GroupObject(group));
                const payload = new GroupObjectArray(GroupObjects);
                dispatch({ type: 'AllGroup', payload });
            },
        },
    );
    // Check Update of Group List
    const SubscriptionOptions: SubscriptionHookOptions = {
        client: defaultClient,
        onSubscriptionData: () => {
            getGroupList();
        },
    };
    useSubscription(gql('subscription Group{onCreateGroup{id}}'), SubscriptionOptions);
    useSubscription(gql('subscription Group{onUpdateGroup{id}}'), SubscriptionOptions);
    useSubscription(gql('subscription Group{onDeleteGroup{id}}'), SubscriptionOptions);
    // on first render
    useEffect(() => {
        getGroupList();
    }, [getGroupList]);
    return (
        <>
            <Title className={Style.AdminTitle} />
            <Paper className={Style.AdminMain}>
                <GroupTable />
                <GroupOperation />
                <AdminDebugUI className={Style.DebugContainer} />
            </Paper>
        </>
    );
};

interface Props {}
interface States {}

class AdminUI extends Component<Props, States> {
    render() {
        return (
            <>
                <AdminProvider>
                    <AdminMain />
                </AdminProvider>
            </>
        );
    }
}

export default AdminUI;
