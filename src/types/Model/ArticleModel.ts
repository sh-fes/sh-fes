import { ModelGroupConnection } from "./GroupModel";
import { SEOInput } from "./SEOModel";
export interface Article {
    __typename: "Article",
    id: string,
    articleID: string,
    title: string,
    content: string,
    tags: string[],
    thumb: string,
    author: string,
    createdAt: string,
    groupID: string,
    isActive: boolean,
    updatedAt: string,
    group: ModelGroupConnection,
    recommend?: ModelArticleConnection,
}
export interface ModelArticleConnection {
    __typename: "ModelArticleConnection",
    items: Article[],
    nextToken: string | null,
}
export interface ListArticlesQuery {
    listArticles: ModelArticleConnection;
}
export interface ArticleByArticleIDQuery {
    ArticleByArticleID: ModelArticleConnection;
}
export interface CreateArticleInput {
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

export class ArticleModel implements Article {
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
    constructor(article?: Article) {
        if (article) {
            if (article.__typename) this.__typename = article.__typename;
            if (article.id) this.id = article.id;
            if (article.articleID) this.articleID = article.articleID;
            if (article.title) this.title = article.title;
            if (article.content) this.content = article.content;
            if (article.tags) this.tags = article.tags;
            if (article.tags) this._tags = article.tags.join(',');
            if (article.thumb) this.thumb = article.thumb;
            if (article.author) this.author = article.author;
            if (article.createdAt) this.createdAt = article.createdAt;
            if (article.groupID) this.groupID = article.groupID;
            if (article.isActive) this.isActive = article.isActive;
            if (article.updatedAt) this.updatedAt = article.updatedAt;
            if (article.group) this.group = article.group;
            if (article.recommend) this.recommend = article.recommend;
        }
    }
    public _update(article: Article) {
        if (article.__typename) this.__typename = article.__typename;
        if (article.id) this.id = article.id;
        if (article.articleID) this.articleID = article.articleID;
        if (article.title) this.title = article.title;
        if (article.content) this.content = article.content;
        if (article.tags) this.tags = article.tags;
        if (article.tags) this._tags = article.tags.join(',');
        if (article.thumb) this.thumb = article.thumb;
        if (article.author) this.author = article.author;
        if (article.createdAt) this.createdAt = article.createdAt;
        if (article.groupID) this.groupID = article.groupID;
        if (article.isActive) this.isActive = article.isActive;
        if (article.updatedAt) this.updatedAt = article.updatedAt;
        if (article.group) this.group = article.group;
        if (article.recommend) this.recommend = article.recommend;
    }
}