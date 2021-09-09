import Amplify from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import awsExports from './aws-exports';
import { GlobalProvider } from './Global';
import './Global.module.scss';
import { InitApolloProvider } from './GraphqlClient';

Amplify.configure(awsExports);

const render = () =>
    ReactDOM.render(
        <React.Fragment>
            <GlobalProvider>
                <InitApolloProvider>
                    <HelmetProvider>
                        <App />
                    </HelmetProvider>
                </InitApolloProvider>
            </GlobalProvider>
        </React.Fragment>,
        document.getElementById('root'),
    );

render();
