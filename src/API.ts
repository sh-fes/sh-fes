/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  groupID: string,
  groupName: string,
  author: string,
  createdAt?: string | null,
};

export type ModelGroupConditionInput = {
  groupID?: ModelIDInput | null,
  groupName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  groupID: string,
  groupName: string,
  author: string,
  createdAt: string,
  updatedAt: string,
  articles?: ModelArticleConnection | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items?:  Array<Article | null > | null,
  nextToken?: string | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  articleID: string,
  title: string,
  author: string,
  createdAt: string,
  groupID: string,
  updatedAt: string,
  group?: Group | null,
};

export type UpdateGroupInput = {
  id: string,
  groupID?: string | null,
  groupName?: string | null,
  author?: string | null,
  createdAt?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  articleID: string,
  title: string,
  author: string,
  createdAt?: string | null,
  groupID: string,
};

export type ModelArticleConditionInput = {
  articleID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  groupID?: ModelIDInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type UpdateArticleInput = {
  id: string,
  articleID?: string | null,
  title?: string | null,
  author?: string | null,
  createdAt?: string | null,
  groupID?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  groupName?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items?:  Array<Group | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  articleID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  groupID?: ModelIDInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        author: string,
        createdAt: string,
        groupID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        author: string,
        createdAt: string,
        groupID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        author: string,
        createdAt: string,
        groupID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    author: string,
    createdAt: string,
    groupID: string,
    updatedAt: string,
    group?:  {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    author: string,
    createdAt: string,
    groupID: string,
    updatedAt: string,
    group?:  {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    author: string,
    createdAt: string,
    groupID: string,
    updatedAt: string,
    group?:  {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        author: string,
        createdAt: string,
        groupID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items?:  Array< {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GroupByGroupIDQueryVariables = {
  groupID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GroupByGroupIDQuery = {
  GroupByGroupID?:  {
    __typename: "ModelGroupConnection",
    items?:  Array< {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    author: string,
    createdAt: string,
    groupID: string,
    updatedAt: string,
    group?:  {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items?:  Array< {
      __typename: "Article",
      id: string,
      articleID: string,
      title: string,
      author: string,
      createdAt: string,
      groupID: string,
      updatedAt: string,
      group?:  {
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ArticleByArticleIDQueryVariables = {
  articleID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ArticleByArticleIDQuery = {
  ArticleByArticleID?:  {
    __typename: "ModelArticleConnection",
    items?:  Array< {
      __typename: "Article",
      id: string,
      articleID: string,
      title: string,
      author: string,
      createdAt: string,
      groupID: string,
      updatedAt: string,
      group?:  {
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  author?: string | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        author: string,
        createdAt: string,
        groupID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  author?: string | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        author: string,
        createdAt: string,
        groupID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  author?: string | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    articles?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        author: string,
        createdAt: string,
        groupID: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  author?: string | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    author: string,
    createdAt: string,
    groupID: string,
    updatedAt: string,
    group?:  {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  author?: string | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    author: string,
    createdAt: string,
    groupID: string,
    updatedAt: string,
    group?:  {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  author?: string | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    author: string,
    createdAt: string,
    groupID: string,
    updatedAt: string,
    group?:  {
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      articles?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};
