import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { AdminProvider } from './AdminContext';
import Style from './AdminUI.module.scss';
import { AdminDebugUI } from './Debug';
import { Operation } from './Operation';

interface Props {}
interface States {}

const Title = ({ className }: { className?: string }) => (
    <Typography className={className} variant='h2' component='h1' gutterBottom>
        Admin UI
    </Typography>
);

class AdminUI extends Component<Props, States> {
    render() {
        return (
            <>
                <AdminProvider>
                    <Title className={Style.AdminTitle} />
                    <Operation />
                    <AdminDebugUI className={Style.DebugContainer} />
                </AdminProvider>
            </>
        );
    }
}

export default AdminUI;
