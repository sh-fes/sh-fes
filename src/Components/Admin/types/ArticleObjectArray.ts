import { ArticleInitialProperties, ArticleObject } from "./ArticleObject";

export interface ArticleHistory {
    head: ArticleObject;
    history: ArticleObject[];
}
export class ArticleObjectArray {
    public ArticleObjects: ArticleObject[] = [];
    constructor(props?: ArticleObject[]) {
        if (props) this.ArticleObjects = props;
    }
    public Add(article: ArticleObject): void {
        this.ArticleObjects.push(article);
    }
    public uniqueIDs(): string[] {
        return Array.from(new Set(this.ArticleObjects.map((article) => article.articleID)));
    }
    public byArticleID(articleID: string): ArticleObject[] {
        return this.ArticleObjects.filter(article => article.articleID === articleID);
    }
    public ArticleHistory(): ArticleHistory[] {
        const articleIDs = this.uniqueIDs();
        return articleIDs.map((articleID) => {
            const articlesByArticleID = this.byArticleID(articleID).sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
            const head = articlesByArticleID.shift() ?? new ArticleObject();
            const history = articlesByArticleID;
            const articleHistory: ArticleHistory = { head, history };
            return articleHistory;
        });
    }
    public ArticleChoices(): ArticleObject[] {
        const articleIDs = this.uniqueIDs();
        const uniqueArticles = articleIDs.map((articleID) =>
            this.ArticleObjects
                .filter((v) => v.articleID === articleID)
                .reduce(
                    (a, b) => (a && new Date(a.createdAt) > new Date(b.createdAt) ? a : b),
                    ArticleInitialProperties,
                ),
        );
        const ArticleChoices = uniqueArticles.map((article) => new ArticleObject(article));
        return ArticleChoices;
    }
}