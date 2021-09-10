import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { AdminProvider, useAdminDispatch } from './AdminContext';
import Style from './AdminUI.module.scss';
import { AdminDebugUI } from './Debug';
import { GroupOperation } from './Operation';

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

interface Props {}
interface States {}

class AdminUI extends Component<Props, States> {
    render() {
        return (
            <>
                <AdminProvider>
                    <SetUsername />
                    <Title className={Style.AdminTitle} />
                    <Paper className={Style.AdminMain}>
                        <GroupOperation />
                        <AdminDebugUI className={Style.DebugContainer} />
                    </Paper>
                </AdminProvider>
            </>
        );
    }
}

export default AdminUI;
