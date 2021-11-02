/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  groupID: string,
  groupName: string,
  groupKind: GroupKind,
  tags?: Array<string> | null,
  icon: string,
  thumb: string,
  seo: SEOInput,
  author: string,
  createdAt?: string | null,
  isActive: boolean,
  isLatest: boolean,
};

export enum GroupKind {
  Athletic = "Athletic",
  Culture = "Culture",
  Grade1 = "Grade1",
  Grade2 = "Grade2",
  Grade3 = "Grade3",
  Grade4 = "Grade4",
  Grade5 = "Grade5",
  Grade6 = "Grade6",
  Teacher = "Teacher",
  None = "None",
}


export type SEOInput = {
  common: CommonSEOInput,
  og: OGSEOInput,
};

export type CommonSEOInput = {
  title: string,
  description: string,
  keywords: string,
};

export type OGSEOInput = {
  title: string,
  type: ArticleType,
  url: string,
  image: string,
  description: string,
  audio?: string | null,
  video?: string | null,
};

export enum ArticleType {
  website = "website",
  article = "article",
}


export type ModelGroupConditionInput = {
  groupID?: ModelIDInput | null,
  groupName?: ModelStringInput | null,
  groupKind?: ModelGroupKindInput | null,
  tags?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  thumb?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  isLatest?: ModelBooleanInput | null,
  and?: Array<ModelGroupConditionInput | null> | null,
  or?: Array<ModelGroupConditionInput | null> | null,
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
  between?: Array<string | null> | null,
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
  between?: Array<number | null> | null,
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
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGroupKindInput = {
  eq?: GroupKind | null,
  ne?: GroupKind | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  groupID: string,
  groupName: string,
  groupKind: GroupKind,
  tags?: Array<string> | null,
  icon: string,
  thumb: string,
  seo: SEO,
  author: string,
  createdAt: string,
  isActive: boolean,
  isLatest: boolean,
  updatedAt: string,
  articles?: ModelArticleConnection | null,
};

export type SEO = {
  __typename: "SEO",
  common: CommonSEO,
  og: OGSEO,
};

export type CommonSEO = {
  __typename: "CommonSEO",
  title: string,
  description: string,
  keywords: string,
};

export type OGSEO = {
  __typename: "OGSEO",
  title: string,
  type: ArticleType,
  url: string,
  image: string,
  description: string,
  audio?: string | null,
  video?: string | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items?: Array<Article | null> | null,
  nextToken?: string | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  articleID: string,
  title: string,
  content: string,
  tags?: Array<string> | null,
  thumb: string,
  seo: SEO,
  author: string,
  createdAt: string,
  groupID: string,
  isActive: boolean,
  isLatest: boolean,
  updatedAt: string,
  group?: ModelGroupConnection | null,
  recommend?: ModelArticleConnection | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items?: Array<Group | null> | null,
  nextToken?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  groupID?: string | null,
  groupName?: string | null,
  groupKind?: GroupKind | null,
  tags?: Array<string> | null,
  icon?: string | null,
  thumb?: string | null,
  seo?: SEOInput | null,
  author?: string | null,
  createdAt?: string | null,
  isActive?: boolean | null,
  isLatest?: boolean | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  articleID: string,
  title: string,
  content: string,
  tags?: Array<string> | null,
  thumb: string,
  seo: SEOInput,
  author: string,
  createdAt?: string | null,
  groupID: string,
  isActive: boolean,
  isLatest: boolean,
};

export type ModelArticleConditionInput = {
  articleID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  thumb?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  groupID?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  isLatest?: ModelBooleanInput | null,
  and?: Array<ModelArticleConditionInput | null> | null,
  or?: Array<ModelArticleConditionInput | null> | null,
  not?: ModelArticleConditionInput | null,
};

export type UpdateArticleInput = {
  id: string,
  articleID?: string | null,
  title?: string | null,
  content?: string | null,
  tags?: Array<string> | null,
  thumb?: string | null,
  seo?: SEOInput | null,
  author?: string | null,
  createdAt?: string | null,
  groupID?: string | null,
  isActive?: boolean | null,
  isLatest?: boolean | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  groupID?: ModelIDInput | null,
  groupName?: ModelStringInput | null,
  groupKind?: ModelGroupKindInput | null,
  tags?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  thumb?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  isLatest?: ModelBooleanInput | null,
  and?: Array<ModelGroupFilterInput | null> | null,
  or?: Array<ModelGroupFilterInput | null> | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array<string | null> | null,
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
  content?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  thumb?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  groupID?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  isLatest?: ModelBooleanInput | null,
  and?: Array<ModelArticleFilterInput | null> | null,
  or?: Array<ModelArticleFilterInput | null> | null,
  not?: ModelArticleFilterInput | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?: {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    groupKind: GroupKind,
    tags?: Array<string> | null,
    icon: string,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    articles?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?: {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    groupKind: GroupKind,
    tags?: Array<string> | null,
    icon: string,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    articles?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?: {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    groupKind: GroupKind,
    tags?: Array<string> | null,
    icon: string,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    articles?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?: {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    content: string,
    tags?: Array<string> | null,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    group?: {
      __typename: "ModelGroupConnection",
      items?: Array<{
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        groupKind: GroupKind,
        tags?: Array<string> | null,
        icon: string,
        thumb: string,
        author: string,
        createdAt: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
    recommend?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?: {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    content: string,
    tags?: Array<string> | null,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    group?: {
      __typename: "ModelGroupConnection",
      items?: Array<{
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        groupKind: GroupKind,
        tags?: Array<string> | null,
        icon: string,
        thumb: string,
        author: string,
        createdAt: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
    recommend?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?: {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    content: string,
    tags?: Array<string> | null,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    group?: {
      __typename: "ModelGroupConnection",
      items?: Array<{
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        groupKind: GroupKind,
        tags?: Array<string> | null,
        icon: string,
        thumb: string,
        author: string,
        createdAt: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
    recommend?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?: {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    groupKind: GroupKind,
    tags?: Array<string> | null,
    icon: string,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    articles?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
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
  listGroups?: {
    __typename: "ModelGroupConnection",
    items?: Array<{
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      groupKind: GroupKind,
      tags?: Array<string> | null,
      icon: string,
      thumb: string,
      author: string,
      createdAt: string,
      isActive: boolean,
      isLatest: boolean,
      updatedAt: string,
      articles?: {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null> | null,
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
  GroupByGroupID?: {
    __typename: "ModelGroupConnection",
    items?: Array<{
      __typename: "Group",
      id: string,
      groupID: string,
      groupName: string,
      groupKind: GroupKind,
      tags?: Array<string> | null,
      icon: string,
      thumb: string,
      author: string,
      createdAt: string,
      isActive: boolean,
      isLatest: boolean,
      updatedAt: string,
      articles?: {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null> | null,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?: {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    content: string,
    tags?: Array<string> | null,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    group?: {
      __typename: "ModelGroupConnection",
      items?: Array<{
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        groupKind: GroupKind,
        tags?: Array<string> | null,
        icon: string,
        thumb: string,
        author: string,
        createdAt: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
    recommend?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?: {
    __typename: "ModelArticleConnection",
    items?: Array<{
      __typename: "Article",
      id: string,
      articleID: string,
      title: string,
      content: string,
      tags?: Array<string> | null,
      thumb: string,
      author: string,
      createdAt: string,
      groupID: string,
      isActive: boolean,
      isLatest: boolean,
      updatedAt: string,
      group?: {
        __typename: "ModelGroupConnection",
        nextToken?: string | null,
      } | null,
      recommend?: {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null> | null,
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
  ArticleByArticleID?: {
    __typename: "ModelArticleConnection",
    items?: Array<{
      __typename: "Article",
      id: string,
      articleID: string,
      title: string,
      content: string,
      tags?: Array<string> | null,
      thumb: string,
      author: string,
      createdAt: string,
      groupID: string,
      isActive: boolean,
      isLatest: boolean,
      updatedAt: string,
      group?: {
        __typename: "ModelGroupConnection",
        nextToken?: string | null,
      } | null,
      recommend?: {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
    } | null> | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  author?: string | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?: {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    groupKind: GroupKind,
    tags?: Array<string> | null,
    icon: string,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    articles?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  author?: string | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?: {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    groupKind: GroupKind,
    tags?: Array<string> | null,
    icon: string,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    articles?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  author?: string | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?: {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    groupKind: GroupKind,
    tags?: Array<string> | null,
    icon: string,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    articles?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  author?: string | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?: {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    content: string,
    tags?: Array<string> | null,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    group?: {
      __typename: "ModelGroupConnection",
      items?: Array<{
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        groupKind: GroupKind,
        tags?: Array<string> | null,
        icon: string,
        thumb: string,
        author: string,
        createdAt: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
    recommend?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  author?: string | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?: {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    content: string,
    tags?: Array<string> | null,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    group?: {
      __typename: "ModelGroupConnection",
      items?: Array<{
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        groupKind: GroupKind,
        tags?: Array<string> | null,
        icon: string,
        thumb: string,
        author: string,
        createdAt: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
    recommend?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  author?: string | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?: {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    content: string,
    tags?: Array<string> | null,
    thumb: string,
    seo: {
      __typename: "SEO",
      common: {
        __typename: "CommonSEO",
        title: string,
        description: string,
        keywords: string,
      },
      og: {
        __typename: "OGSEO",
        title: string,
        type: ArticleType,
        url: string,
        image: string,
        description: string,
        audio?: string | null,
        video?: string | null,
      },
    },
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    isLatest: boolean,
    updatedAt: string,
    group?: {
      __typename: "ModelGroupConnection",
      items?: Array<{
        __typename: "Group",
        id: string,
        groupID: string,
        groupName: string,
        groupKind: GroupKind,
        tags?: Array<string> | null,
        icon: string,
        thumb: string,
        author: string,
        createdAt: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
    recommend?: {
      __typename: "ModelArticleConnection",
      items?: Array<{
        __typename: "Article",
        id: string,
        articleID: string,
        title: string,
        content: string,
        tags?: Array<string> | null,
        thumb: string,
        author: string,
        createdAt: string,
        groupID: string,
        isActive: boolean,
        isLatest: boolean,
        updatedAt: string,
      } | null> | null,
      nextToken?: string | null,
    } | null,
  } | null,
};
