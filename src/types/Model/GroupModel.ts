import { ModelArticleConnection } from "./ArticleModel";

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
    articles: ModelArticleConnection;
}
export interface ModelGroupConnection {
    __typename: "ModelGroupConnection",
    items: Group[],
    nextToken: string | null,
}
export interface ListGroupsQuery {
    listGroups: ModelGroupConnection;
}
export interface GroupByGroupIDQuery {
    GroupByGroupID: ModelGroupConnection;
}
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
export enum GroupKindDisplayValue {
    Athletic = '運動部',
    Culture = '文化部',
    Grade1 = '中学1年生',
    Grade2 = '中学2年生',
    Grade3 = '中学3年生',
    Grade4 = '高校1年生',
    Grade5 = '高校2年生',
    Grade6 = '高校3年生',
    Teacher = '教員',
    None = '指定なし',
}


const ArticleConnectionInitialProperties: ModelArticleConnection = {
    __typename: 'ModelArticleConnection',
    items: [],
    nextToken: null,
};
export const GroupInitialProperties: Group = {
    __typename: 'Group',
    id: '',
    groupID: '',
    groupName: '',
    groupKind: GroupKind.None,
    tags: [],
    icon: '',
    thumb: '',
    author: '',
    createdAt: '',
    isActive: true,
    updatedAt: '',
    articles: ArticleConnectionInitialProperties
};

export class AdminGroupObject implements Group {
    public inputValue = '';
    public __typename = GroupInitialProperties.__typename;
    public id = GroupInitialProperties.id;
    public groupID = GroupInitialProperties.groupID;
    public groupName = GroupInitialProperties.groupName;
    public groupKind = GroupInitialProperties.groupKind;
    public tags = GroupInitialProperties.tags;
    public _tags = GroupInitialProperties.tags.join(',');
    public icon = GroupInitialProperties.icon;
    public thumb = GroupInitialProperties.thumb;
    public author = GroupInitialProperties.author;
    public createdAt = GroupInitialProperties.createdAt;
    public isActive = GroupInitialProperties.isActive;
    public updatedAt = GroupInitialProperties.updatedAt;
    public articles = GroupInitialProperties.articles;
    constructor(group?: Group) {
        if (group) {
            if (group.__typename) this.__typename = group.__typename;
            if (group.id) this.id = group.id;
            if (group.groupID) this.groupID = group.groupID;
            if (group.groupName) this.groupName = group.groupName;
            if (group.groupKind) this.groupKind = group.groupKind;
            if (group.tags) this.tags = group.tags;
            if (group.tags) this._tags = group.tags.join(',');
            if (group.icon) this.icon = group.icon;
            if (group.thumb) this.thumb = group.thumb;
            if (group.author) this.author = group.author;
            if (group.createdAt) this.createdAt = group.createdAt;
            if (group.isActive) this.isActive = group.isActive;
            if (group.updatedAt) this.updatedAt = group.updatedAt;
            if (group.articles) this.articles = group.articles;
        }
    }
    public _update(group: Group) {
        if (group.__typename) this.__typename = group.__typename;
        if (group.id) this.id = group.id;
        if (group.groupID) this.groupID = group.groupID;
        if (group.groupName) this.groupName = group.groupName;
        if (group.groupKind) this.groupKind = group.groupKind;
        if (group.tags) this.tags = group.tags;
        if (group.tags) this._tags = group.tags.join(',');
        if (group.icon) this.icon = group.icon;
        if (group.thumb) this.thumb = group.thumb;
        if (group.author) this.author = group.author;
        if (group.createdAt) this.createdAt = group.createdAt;
        if (group.isActive) this.isActive = group.isActive;
        if (group.updatedAt) this.updatedAt = group.updatedAt;
        if (group.articles) this.articles = group.articles;
    }
}