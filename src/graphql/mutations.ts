/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
