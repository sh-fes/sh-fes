import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    from,
    InMemoryCache,
    split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import Auth from '@aws-amplify/auth';
import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
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

// client
const DefaultLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    from([
        // @ts-ignore
        createAuthLink(defaultAuthConfig),
        createSubscriptionHandshakeLink(defaultAuthConfig),
    ]),
    from([
        // @ts-ignore
        createAuthLink(defaultAuthConfig),
        createHttpLink({ uri: defaultAuthConfig.url }),
    ]),
);
const AdminLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    from([
        // @ts-ignore
        createAuthLink(adminAuthConfig),
        createSubscriptionHandshakeLink(adminAuthConfig),
    ]),
    from([
        // @ts-ignore
        createAuthLink(adminAuthConfig),
        createHttpLink({ uri: adminAuthConfig.url }),
    ]),
);
export const defaultClient = new ApolloClient({
    link: DefaultLink,
    cache: new InMemoryCache(),
});
export const adminClient = new ApolloClient({
    link: AdminLink,
    cache: new InMemoryCache(),
});

export const InitApolloProvider = ({ children }: { children: ReactNode }) => (
    <ApolloProvider client={defaultClient}>
        <ApolloProvider client={adminClient}>{children}</ApolloProvider>
    </ApolloProvider>
);