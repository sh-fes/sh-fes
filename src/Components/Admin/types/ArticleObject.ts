import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import { CreateArticleInput, CreateArticleMutation, CreateArticleMutationVariables } from "../../../API";
import { Article, ModelArticleConnection, ModelGroupConnection } from "./API";

const GroupConnectionInitialProperties: ModelGroupConnection = {
    __typename: 'ModelGroupConnection',
    items: [],
    nextToken: null,
};
const ArticleConnectionInitialProperties: ModelArticleConnection = {
    __typename: 'ModelArticleConnection',
    items: [],
    nextToken: null,
};
export const ArticleInitialProperties: Article = {
    __typename: 'Article',
    id: '',
    articleID: '',
    title: '',
    content: '',
    tags: [],
    thumb: '',
    author: '',
    createdAt: '',
    groupID: '',
    isActive: true,
    updatedAt: '',
    group: GroupConnectionInitialProperties,
    recommend: ArticleConnectionInitialProperties
};
export class ArticleObject implements Article {
    public inputValue = '';
    public __typename = ArticleInitialProperties.__typename;
    public id = ArticleInitialProperties.id;
    public articleID = ArticleInitialProperties.articleID;
    public title = ArticleInitialProperties.title;
    public content = ArticleInitialProperties.content;
    public tags = ArticleInitialProperties.tags;
    public _tags = ArticleInitialProperties.tags.join(',');
    public thumb = ArticleInitialProperties.thumb;
    public author = ArticleInitialProperties.author;
    public createdAt = ArticleInitialProperties.createdAt;
    public groupID = ArticleInitialProperties.groupID;
    public isActive = ArticleInitialProperties.isActive;
    public updatedAt = ArticleInitialProperties.updatedAt;
    public group = ArticleInitialProperties.group;
    public recommend = ArticleInitialProperties.recommend;
    constructor(props?: Article) {
        if (props) {
            this.__typename = props.__typename;
            this.id = props.id;
            this.articleID = props.articleID;
            this.title = props.title;
            this.content = props.content;
            this.tags = props.tags;
            this._tags = props.tags.join(',');
            this.thumb = props.thumb;
            this.author = props.author;
            this.createdAt = props.createdAt;
            this.groupID = props.groupID;
            this.isActive = props.isActive;
            this.updatedAt = props.updatedAt;
            this.group = props.group;
            this.recommend = props.recommend;
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
    private toInputType(author?: string): CreateArticleInput {
        return {
            articleID: this.articleID,
            title: this.title,
            content: this.content,
            tags: this.tags,
            thumb: this.thumb,
            author: author ?? this.author,
            groupID: this.groupID,
            isActive: this.isActive,
        };
    }
    public tagsToArray() {
        this.tags = this._tags.split(',').filter((e) => e !== '');
    }
    public defaultDisplayValue() {
        return [
            { key: '???????????????????????????', value: this.__typename },
            { key: '????????????', value: this.isActive ? '??????' : '?????????' },
            { key: '??????ID', value: this.articleID },
            { key: '??????ID', value: this.groupID },
            { key: '??????????????????', value: this.title },
            { key: '???????????????', value: this.content },
            { key: '??????', value: this.displayTags() },
            { key: '???????????????URL', value: this.thumb },
            { key: '????????????', value: this.author },
            { key: '????????????', value: this.displayCreatedAt() },
            { key: '????????????', value: this.displayUpdatedAt() },
        ];
    }
    public tableDisplayValue() {
        return [
            { key: '??????ID', value: this.articleID },
            { key: '??????????????????', value: this.title },
            { key: '??????ID', value: this.groupID },
            { key: '????????????', value: this.isActive ? '??????' : '?????????' },
            { key: '??????', value: this.displayTags() },
            { key: '????????????', value: this.author },
            { key: '????????????', value: this.displayCreatedAt() },
            { key: '????????????', value: this.displayUpdatedAt() }
        ];
    }
    public Create(CreateArticle: (options?: MutationFunctionOptions<CreateArticleMutation, CreateArticleMutationVariables>) => Promise<FetchResult<CreateArticleMutation>>, author: string) {
        const input = this.toInputType(author);
        const variables: CreateArticleMutationVariables = { input };
        CreateArticle({ variables });
    }
}