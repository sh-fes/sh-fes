import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import { CreateGroupInput, CreateGroupMutation, CreateGroupMutationVariables, GroupKind } from "../../../API";
import { Group } from "./API";

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
    articles: {
        __typename: 'ModelArticleConnection',
        items: [],
        nextToken: null,
    },
};
export class GroupObject implements Group {
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
    constructor(props?: Group) {
        if (props) {
            this.__typename = props.__typename;
            this.id = props.id;
            this.groupID = props.groupID;
            this.groupName = props.groupName;
            this.groupKind = props.groupKind;
            this.tags = props.tags;
            this._tags = props.tags.join(',');
            this.icon = props.icon;
            this.thumb = props.thumb;
            this.author = props.author;
            this.createdAt = props.createdAt;
            this.isActive = props.isActive;
            this.updatedAt = props.updatedAt;
            this.articles = props.articles;
        }
    }
    private displayGroupKind() {
        switch (this.groupKind) {
            case GroupKind.Athletic:
                return GroupKindDisplayValue.Athletic;
            case GroupKind.Culture:
                return GroupKindDisplayValue.Culture;
            case GroupKind.Grade1:
                return GroupKindDisplayValue.Grade1;
            case GroupKind.Grade2:
                return GroupKindDisplayValue.Grade2;
            case GroupKind.Grade3:
                return GroupKindDisplayValue.Grade3;
            case GroupKind.Grade4:
                return GroupKindDisplayValue.Grade4;
            case GroupKind.Grade5:
                return GroupKindDisplayValue.Grade5;
            case GroupKind.Grade6:
                return GroupKindDisplayValue.Grade6;
            case GroupKind.Teacher:
                return GroupKindDisplayValue.Teacher;
            case GroupKind.None:
                return GroupKindDisplayValue.None;
            default:
                return 'エラー';
        }
    }
    private displayTags() {
        return JSON.stringify(this.tags);
    }
    private displayCreatedAt() {
        if (this.createdAt === '') return '';
        const date = new Date(this.createdAt);
        return date.toLocaleString();
    }
    private displayUpdatedAt() {
        if (this.createdAt === '') return '';
        const date = new Date(this.createdAt);
        return date.toLocaleString();
    }
    private toInputType(author?: string): CreateGroupInput {
        return {
            groupID: this.groupID,
            groupName: this.groupName,
            groupKind: this.groupKind,
            tags: this.tags,
            icon: this.icon,
            thumb: this.thumb,
            author: author ?? this.author,
            isActive: this.isActive,
        };
    }
    public tagsToArray() {
        this.tags = this._tags.split(',').filter((e) => e !== '');
    }
    public defaultDisplayValue() {
        return [
            { key: 'オブジェクトタイプ', value: this.__typename },
            { key: '公開設定', value: this.isActive ? '公開' : '非公開' },
            { key: '団体ID', value: this.groupID },
            { key: '団体名', value: this.groupName },
            { key: '団体', value: this.displayGroupKind() },
            { key: 'タグ', value: this.displayTags() },
            { key: 'アイコンURL', value: this.icon },
            { key: 'サムネイルURL', value: this.thumb },
            { key: '編集者名', value: this.author },
            { key: '作成日時', value: this.displayCreatedAt() },
            { key: '更新日時', value: this.displayUpdatedAt() },
        ];
    }
    public tableDisplayValue() {
        return [
            { key: '団体ID', value: this.groupID },
            { key: '団体名', value: this.groupName },
            { key: '団体', value: this.displayGroupKind() },
            { key: '公開設定', value: this.isActive ? '公開' : '非公開' },
            { key: 'タグ', value: this.displayTags() },
            { key: '編集者名', value: this.author },
            { key: '作成日時', value: this.displayCreatedAt() },
            { key: '更新日時', value: this.displayUpdatedAt() }
        ];
    }
    public Create(CreateGroup: (options?: MutationFunctionOptions<CreateGroupMutation, CreateGroupMutationVariables>) => Promise<FetchResult<CreateGroupMutation>>, author: string) {
        const input = this.toInputType(author);
        const variables: CreateGroupMutationVariables = { input };
        CreateGroup({ variables });
    }
}