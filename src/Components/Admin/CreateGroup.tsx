import { gql, useQuery } from '@apollo/client';
import React, { Component } from 'react';
import { GroupByGroupIDQuery, GroupByGroupIDQueryVariables, ModelSortDirection } from '../../API';
import { groupByGroupID } from '../../graphql/queries';
import { adminClient } from '../../GraphqlClient';

interface CheckInput {
    c: boolean;
    v: string | null;
    a: boolean;
}
const _i = { c: false, v: null, a: false };
const _i_s = (target: HTMLElement): CheckInput => ({
    c: true,
    v: (target as HTMLInputElement).value,
    a: false,
});
const _i_e = (): CheckInput => ({ c: false, v: null, a: true });

const Q = ({ groupID }: { groupID: string }) => {
    const { loading, error, data } = useQuery<GroupByGroupIDQuery, GroupByGroupIDQueryVariables>(
        gql(groupByGroupID),
        {
            variables: { groupID, limit: 5, sortDirection: ModelSortDirection.DESC },
            client: adminClient,
        },
    );
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>key</th>
                        <th>author</th>
                        <th>groupID</th>
                        <th>id</th>
                        <th>groupName</th>
                        <th>createdAt</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.GroupByGroupID?.items?.map((item, key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{item?.author}</td>
                            <td>{item?.groupID}</td>
                            <td>{item?.id}</td>
                            <td>{item?.groupName}</td>
                            <td>
                                {item?.createdAt
                                    ? new Date(item?.createdAt).toLocaleString('ja')
                                    : item?.createdAt}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

interface Props {}
interface States {
    _i_groupID: CheckInput;
    _f_groupID: boolean;
}

class CreateGroupForm extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { _i_groupID: _i, _f_groupID: false };
        this.Enter = this.Enter.bind(this);
    }
    Enter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const target = e.target as HTMLElement;
            switch (target.id) {
                case 'create_group__c_groupID':
                    if ((target as HTMLInputElement).value === '')
                        return this.setState({ _i_groupID: _i_e() });
                    this.setState({ _i_groupID: _i_s(target) });
                    break;
                default:
                    break;
            }
        }
    }
    render() {
        return (
            <>
                <div className='create-group'>
                    <p>Debug:{JSON.stringify(this.state)}</p>
                    <h3>CreateGroupForm</h3>
                    <p>
                        <label htmlFor='groupID'>groupID</label>
                        <input
                            type='text'
                            name='groupID'
                            id='create_group__c_groupID'
                            onKeyPress={this.Enter}
                            readOnly={this.state._i_groupID.c}
                        />
                    </p>
                    {this.state._i_groupID.v && this.state._i_groupID.c ? (
                        <Q groupID={this.state._i_groupID.v} />
                    ) : null}
                </div>
            </>
        );
    }
}

export default CreateGroupForm;
