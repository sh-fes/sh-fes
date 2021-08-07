import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client';
import Amplify from 'aws-amplify';
import { createAuthLink } from 'aws-appsync-auth-link';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const authConfig = {
    url: awsExports.aws_appsync_graphqlEndpoint,
    region: awsExports.aws_appsync_region,
    auth: {
        type: awsExports.aws_appsync_authenticationType,
        apiKey: awsExports.aws_appsync_apiKey,
    },
};
const link = from([
    // @ts-ignore
    createAuthLink(authConfig),
    createHttpLink({ uri: authConfig.url }),
]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

const render = () =>
    ReactDOM.render(
        <React.StrictMode>
            <ApolloProvider client={client}>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </ApolloProvider>
        </React.StrictMode>,
        document.getElementById('root'),
    );

render();
