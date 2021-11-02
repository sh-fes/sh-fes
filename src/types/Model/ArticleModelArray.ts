import { ArticleModel } from "./ArticleModel";

export class ArticleModelArray {
    public ArticleModels: ArticleModel[] = [];
    public title: string = '';
    constructor(articles?: ArticleModel[]) {
        if (articles) this.ArticleModels = articles;
    }
    public _update(articles: ArticleModel[]): void {
        this.ArticleModels = articles;
    }
    public Add(article: ArticleModel): void {
        this.ArticleModels.push(article);
    }
    public uniqueIDs(): string[] {
        return Array.from(new Set(this.ArticleModels.map((article) => article.articleID)));
    }
    public byArticleID(articleID: string): ArticleModel[] {
        return this.ArticleModels.filter(article => article.articleID === articleID);
    }
}