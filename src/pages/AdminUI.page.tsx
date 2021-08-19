import { gql, useMutation } from '@apollo/client';
import Auth from '@aws-amplify/auth';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React, { Component, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CreateGroupInput, CreateGroupMutation, CreateGroupMutationVariables } from '../API';
import { CreateGroupForm as CreateGroupFormSub } from '../Components/Admin';
import { createGroup } from '../graphql/mutations';
import { adminClient, defaultClient } from '../GraphqlClient';

const Q = () => {
    // getAmplifyUserAgent();
    const [CreateGroup, { loading, error, data }] = useMutation<
        CreateGroupMutation,
        CreateGroupMutationVariables
    >(gql(createGroup));
    CreateGroup({
        variables: {
            input: {
                groupID: 'g-otkrickey',
                id: 'g-otkrickey-1',
                groupName: 'GroupOtkrickey',
                author: 'otkrickey',
            },
        },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    if (data?.createGroup) return <p>{data.createGroup.groupName}</p>;
    return <p>????</p>;
};
const CreateGroupForm = () => {
    const [groupID, setGroupID] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [groupName, setGroupName] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const defaultInput: CreateGroupInput = {
        groupID: 'g-otkrickey',
        id: 'g-otkrickey-1',
        groupName: 'GroupOtkrickey',
        author: 'otkrickey',
    };
    const [CreateGroup, { loading, error, data }] = useMutation<
        CreateGroupMutation,
        CreateGroupMutationVariables
    >(gql(createGroup), {
        variables: {
            input: defaultInput,
        },
        client: adminClient,
    });
    Auth.currentUserInfo().then((user) => setAuthor(user.username));
    return (
        <div>
            <h3>Create Group</h3>
            {loading ? <p>Loading...</p> : null}
            {error ? <p>{error.message}</p> : null}
            {data?.createGroup ? <p>{JSON.stringify(data.createGroup)}</p> : null}
            {author}
            <form>
                <p>
                    <label>groupID</label>
                    <input type='text' onChange={(e) => setGroupID(e.target.value)} />
                </p>
                <p>
                    <label>id (groupVersionID)</label>
                    <input type='text' onChange={(e) => setId(e.target.value)} />
                </p>
                <p>
                    <label>groupName</label>
                    <input type='text' onChange={(e) => setGroupName(e.target.value)} />
                </p>
            </form>
            <button
                onClick={() =>
                    !loading &&
                    groupID &&
                    id &&
                    groupName &&
                    CreateGroup({
                        client: defaultClient,
                        variables: {
                            input: {
                                ...defaultInput,
                                groupID,
                                id,
                                groupName,
                            },
                        },
                    })
                }
            >
                Add
            </button>
        </div>
    );
};

interface Props {}
interface States {}

class AdminUIPage extends Component<Props, States> {
    render() {
        return (
            <>
                <Helmet>
                    <title>Admin UI</title>
                </Helmet>
                <h1>Admin UI</h1>
                <AmplifySignOut />
                <CreateGroupFormSub />
                {/* <CreateGroupForm /> */}
            </>
        );
    }
}

export default withAuthenticator(AdminUIPage);
