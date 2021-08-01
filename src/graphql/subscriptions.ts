/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
