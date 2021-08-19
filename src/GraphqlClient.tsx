import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client';
import Auth from '@aws-amplify/auth';
import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link';
import { ReactNode } from 'react';
import awsExports from './aws-exports';

interface AuthConfig {
    url: string;
    region: string;
    auth: AuthOptions;
}
const defaultAuthConfig: AuthConfig = {
    url: awsExports.aws_appsync_graphqlEndpoint,
    region: awsExports.aws_appsync_region,
    auth: {
        type: awsExports.aws_appsync_authenticationType,
        apiKey: awsExports.aws_appsync_apiKey,
    } as AuthOptions,
};
const adminAuthConfig: AuthConfig = {
    ...defaultAuthConfig,
    auth: {
        type: 'AMAZON_COGNITO_USER_POOLS',
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
    } as AuthOptions,
};
export const defaultClient = new ApolloClient({
    link: from([
        // @ts-ignore
        createAuthLink(defaultAuthConfig),
        createHttpLink({ uri: defaultAuthConfig.url }),
    ]),
    cache: new InMemoryCache(),
});
export const adminClient = new ApolloClient({
    link: from([
        // @ts-ignore
        createAuthLink(adminAuthConfig),
        createHttpLink({ uri: adminAuthConfig.url }),
    ]),
    cache: new InMemoryCache(),
});

export const InitApolloProvider = ({ children }: { children: ReactNode }) => (
    <ApolloProvider client={defaultClient}>
        <ApolloProvider client={adminClient}>{children}</ApolloProvider>
    </ApolloProvider>
);