import React from 'react';
import { Layout } from '../Components';
import { ThemeSwitcher } from '../Components/Theme';
import { useGlobalState } from '../Global';

const NotfoundRoute = () => {
    const state = useGlobalState();
    return (
        <Layout layout={'notfound'}>
            <h1>Not Found</h1>
            <ThemeSwitcher />
            <p>{JSON.stringify(state)}</p>
        </Layout>
    );
};

export default NotfoundRoute;
