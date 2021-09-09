import { GroupKind } from "../../API";

export interface ListGroupsQuery {
    listGroups: ModelGroupConnection
}
export interface GroupByGroupIDQuery {
    GroupByGroupID: ModelGroupConnection
}
export interface ModelGroupConnection {
    __typename: "ModelGroupConnection",
    items: Group[],
    nextToken: string | null,

}
export interface Group {
    __typename: "Group",
    id: string,
    groupID: string,
    groupName: string,
    groupKind: GroupKind,
    tags: string[],
    icon: string,
    thumb: string,
    author: string,
    createdAt: string,
    isActive: boolean,
    updatedAt: string,
    articles: ModelArticleConnection
}
export interface ModelArticleConnection {
    __typename: "ModelArticleConnection",
    items: Article[],
    nextToken: string | null,
}
export interface Article {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    tags: string[],
    thumb: string,
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    updatedAt: string,
    recommend?: ModelArticleConnection,
}