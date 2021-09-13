import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import Style from '../App.module.scss';
import { AdminUI } from '../Components/Admin';

interface Props {}
interface States {}

class AdminUIPage extends Component<Props, States> {
    render() {
        return (
            <>
                <Helmet>
                    <title>Admin UI</title>
                </Helmet>
                <div className={Style.AdminContainer}>
                    <div className={Style.SignOutButton}>
                        <AmplifySignOut />
                    </div>
                    <AdminUI />
                </div>
            </>
        );
    }
}

export default withAuthenticator(AdminUIPage);
