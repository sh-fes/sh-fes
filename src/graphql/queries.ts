/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      groupID
      groupName
      author
      createdAt
      updatedAt
      articles {
        items {
          id
          articleID
          title
          author
          createdAt
          groupID
          updatedAt
        }
        nextToken
      }
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
        groupID
        groupName
        author
        createdAt
        updatedAt
        articles {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const groupByGroupID = /* GraphQL */ `
  query GroupByGroupID(
    $groupID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GroupByGroupID(
      groupID: $groupID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupID
        groupName
        author
        createdAt
        updatedAt
        articles {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      articleID
      title
      author
      createdAt
      groupID
      updatedAt
      group {
        id
        groupID
        groupName
        author
        createdAt
        updatedAt
        articles {
          nextToken
        }
      }
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
        articleID
        title
        author
        createdAt
        groupID
        updatedAt
        group {
          id
          groupID
          groupName
          author
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const articleByArticleID = /* GraphQL */ `
  query ArticleByArticleID(
    $articleID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ArticleByArticleID(
      articleID: $articleID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        articleID
        title
        author
        createdAt
        groupID
        updatedAt
        group {
          id
          groupID
          groupName
          author
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
