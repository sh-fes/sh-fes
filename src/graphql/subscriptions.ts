/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($author: String) {
    onCreateGroup(author: $author) {
      id
      groupID
      groupName
      groupKind
      tags
      icon
      thumb
      seo {
        common {
          title
          description
          keywords
        }
        og {
          title
          type
          url
          image
          description
          audio
          video
        }
      }
      author
      createdAt
      isActive
      isLatest
      updatedAt
      articles {
        items {
          id
          articleID
          title
          content
          tags
          thumb
          author
          createdAt
          groupID
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($author: String) {
    onUpdateGroup(author: $author) {
      id
      groupID
      groupName
      groupKind
      tags
      icon
      thumb
      seo {
        common {
          title
          description
          keywords
        }
        og {
          title
          type
          url
          image
          description
          audio
          video
        }
      }
      author
      createdAt
      isActive
      isLatest
      updatedAt
      articles {
        items {
          id
          articleID
          title
          content
          tags
          thumb
          author
          createdAt
          groupID
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($author: String) {
    onDeleteGroup(author: $author) {
      id
      groupID
      groupName
      groupKind
      tags
      icon
      thumb
      seo {
        common {
          title
          description
          keywords
        }
        og {
          title
          type
          url
          image
          description
          audio
          video
        }
      }
      author
      createdAt
      isActive
      isLatest
      updatedAt
      articles {
        items {
          id
          articleID
          title
          content
          tags
          thumb
          author
          createdAt
          groupID
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($author: String) {
    onCreateArticle(author: $author) {
      id
      articleID
      title
      content
      tags
      thumb
      seo {
        common {
          title
          description
          keywords
        }
        og {
          title
          type
          url
          image
          description
          audio
          video
        }
      }
      author
      createdAt
      groupID
      isActive
      isLatest
      updatedAt
      group {
        items {
          id
          groupID
          groupName
          groupKind
          tags
          icon
          thumb
          author
          createdAt
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
      recommend {
        items {
          id
          articleID
          title
          content
          tags
          thumb
          author
          createdAt
          groupID
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($author: String) {
    onUpdateArticle(author: $author) {
      id
      articleID
      title
      content
      tags
      thumb
      seo {
        common {
          title
          description
          keywords
        }
        og {
          title
          type
          url
          image
          description
          audio
          video
        }
      }
      author
      createdAt
      groupID
      isActive
      isLatest
      updatedAt
      group {
        items {
          id
          groupID
          groupName
          groupKind
          tags
          icon
          thumb
          author
          createdAt
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
      recommend {
        items {
          id
          articleID
          title
          content
          tags
          thumb
          author
          createdAt
          groupID
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($author: String) {
    onDeleteArticle(author: $author) {
      id
      articleID
      title
      content
      tags
      thumb
      seo {
        common {
          title
          description
          keywords
        }
        og {
          title
          type
          url
          image
          description
          audio
          video
        }
      }
      author
      createdAt
      groupID
      isActive
      isLatest
      updatedAt
      group {
        items {
          id
          groupID
          groupName
          groupKind
          tags
          icon
          thumb
          author
          createdAt
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
      recommend {
        items {
          id
          articleID
          title
          content
          tags
          thumb
          author
          createdAt
          groupID
          isActive
          isLatest
          updatedAt
        }
        nextToken
      }
    }
  }
`;
