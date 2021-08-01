/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
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

export type Group = {
  __typename: "Group",
  id: string,
  name: string,
  posts?: ModelArticleConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items?:  Array<Article | null > | null,
  nextToken?: string | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  title: string,
  groupID: string,
  group?: Group | null,
  content?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  title: string,
  groupID: string,
  content?: string | null,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  groupID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
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

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  groupID?: string | null,
  content?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items?:  Array<Group | null > | null,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  groupID?: ModelIDInput | null,
  content?: ModelStringInput | null,
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
    name: string,
    posts?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        groupID: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    posts?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        groupID: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    posts?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        groupID: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    title: string,
    groupID: string,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
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
    title: string,
    groupID: string,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
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
    title: string,
    groupID: string,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        groupID: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      name: string,
      posts?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
    title: string,
    groupID: string,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
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
      title: string,
      groupID: string,
      group?:  {
        __typename: "Group",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        groupID: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        groupID: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelArticleConnection",
      items?:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        groupID: string,
        content?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    groupID: string,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    groupID: string,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    groupID: string,
    group?:  {
      __typename: "Group",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
