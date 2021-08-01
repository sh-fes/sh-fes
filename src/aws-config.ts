import awsConfig from './aws-exports';

const config = {
    aws_project_region: awsConfig.aws_project_region,
    aws_cognito_identity_pool_id: awsConfig.aws_cognito_identity_pool_id,
    aws_cognito_region: awsConfig.aws_cognito_region,
    aws_user_pools_id: awsConfig.aws_user_pools_id,
    aws_user_pools_web_client_id: awsConfig.aws_user_pools_web_client_id,
    oauth: awsConfig.oauth,
    aws_appsync_graphqlEndpoint: awsConfig.aws_appsync_graphqlEndpoint,
    aws_appsync_region: awsConfig.aws_appsync_region,
    aws_appsync_authenticationType: awsConfig.aws_appsync_authenticationType,
    aws_appsync_apiKey: awsConfig.aws_appsync_apiKey,
}
export default config