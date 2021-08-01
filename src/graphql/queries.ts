/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          groupID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      groupID
      group {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        groupID
        group {
          id
          name
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
