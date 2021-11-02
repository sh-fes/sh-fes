import { FetchResult, MutationFunctionOptions } from "@apollo/client";
import { CreateArticleMutation, CreateArticleMutationVariables } from "../../../API";
import { Article, ArticleModel, CreateArticleInput, ModelArticleConnection, ModelGroupConnection, SEOInitialProperties } from "../../../types";

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

export class AdminArticleModel extends ArticleModel {
    public inputValue = '';
    public displayTags() {
        return JSON.stringify(this.tags);
    }
    public displayCreatedAt() {
        if (this.createdAt === '') return '';
        const date = new Date(this.createdAt);
        return date.toLocaleString();
    }
    public displayUpdatedAt() {
        if (this.createdAt === '') return '';
        const date = new Date(this.createdAt);
        return date.toLocaleString();
    }
    public toInputType(author?: string): CreateArticleInput {
        return {
            articleID: this.articleID,
            title: this.title,
            content: this.content,
            tags: this.tags,
            thumb: this.thumb,
            author: author ?? this.author,
            groupID: this.groupID,
            isActive: this.isActive,
            isLatest: true,
            seo: SEOInitialProperties
        };
    }
    public tagsToArray() {
        this.tags = this._tags.split(',').filter((e) => e !== '');
    }
    public defaultDisplayValue() {
        return [
            { key: 'オブジェクトタイプ', value: this.__typename },
            { key: '公開設定', value: this.isActive ? '公開' : '非公開' },
            { key: '記事ID', value: this.articleID },
            { key: '団体ID', value: this.groupID },
            { key: '記事タイトル', value: this.title },
            { key: 'コンテンツ', value: this.content },
            { key: 'タグ', value: this.displayTags() },
            { key: 'サムネイルURL', value: this.thumb },
            { key: '編集者名', value: this.author },
            { key: '作成日時', value: this.displayCreatedAt() },
            { key: '更新日時', value: this.displayUpdatedAt() },
        ];
    }
    public tableDisplayValue() {
        return [
            { key: '記事ID', value: this.articleID },
            { key: '記事タイトル', value: this.title },
            { key: '団体ID', value: this.groupID },
            { key: '公開設定', value: this.isActive ? '公開' : '非公開' },
            { key: 'タグ', value: this.displayTags() },
            { key: '編集者名', value: this.author },
            { key: '作成日時', value: this.displayCreatedAt() },
            { key: '更新日時', value: this.displayUpdatedAt() }
        ];
    }
    public Create(CreateArticle: (options?: MutationFunctionOptions<CreateArticleMutation, CreateArticleMutationVariables>) => Promise<FetchResult<CreateArticleMutation>>, author: string) {
        const input = this.toInputType(author);
        const variables: CreateArticleMutationVariables = { input };
        CreateArticle({ variables });
    }
}