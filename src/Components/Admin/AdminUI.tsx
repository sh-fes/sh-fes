import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { AdminProvider, useAdminDispatch } from './AdminContext';
import Style from './AdminUI.module.scss';
import { AdminDebugUI } from './Debug';
import { GroupOperation } from './Operation';

interface Props {}
interface States {}

const Title = ({ className }: { className?: string }) => (
    <Typography className={className} variant='h2' component='h1' gutterBottom>
        Admin UI
    </Typography>
);
const SetUsername = () => {
    const dispatch = useAdminDispatch();
    onAuthUIStateChange((nextAuthState, authData) => {
        if (nextAuthState === AuthState.SignedIn && authData?.hasOwnProperty('username')) {
            dispatch({
                type: 'Username',
                payload: (authData as { username: string }).username,
            });
        }
    });
    return <></>;
};

class AdminUI extends Component<Props, States> {
    render() {
        return (
            <>
                <AdminProvider>
                    <SetUsername />
                    <Title className={Style.AdminTitle} />
                    <GroupOperation />
                    <AdminDebugUI className={Style.DebugContainer} />
                </AdminProvider>
            </>
        );
    }
}

export default AdminUI;
