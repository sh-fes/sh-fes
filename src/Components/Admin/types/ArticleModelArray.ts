import { AdminArticleModel, ArticleInitialProperties } from "./ArticleModel";

export interface ArticleHistory {
    head: AdminArticleModel;
    history: AdminArticleModel[];
}
export class AdminArticleObjectArray {
    public ArticleObjects: AdminArticleModel[] = [];
    constructor(props?: AdminArticleModel[]) {
        if (props) this.ArticleObjects = props;
    }
    public Add(article: AdminArticleModel): void {
        this.ArticleObjects.push(article);
    }
    public uniqueIDs(): string[] {
        return Array.from(new Set(this.ArticleObjects.map((article) => article.articleID)));
    }
    public byArticleID(articleID: string): AdminArticleModel[] {
        return this.ArticleObjects.filter(article => article.articleID === articleID);
    }
    public ArticleHistory(): ArticleHistory[] {
        const articleIDs = this.uniqueIDs();
        return articleIDs.map((articleID) => {
            const articlesByArticleID = this.byArticleID(articleID).sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
            const head = articlesByArticleID.shift() ?? new AdminArticleModel();
            const history = articlesByArticleID;
            const articleHistory: ArticleHistory = { head, history };
            return articleHistory;
        });
    }
    public ArticleChoices(): AdminArticleModel[] {
        const articleIDs = this.uniqueIDs();
        const uniqueArticles = articleIDs.map((articleID) =>
            this.ArticleObjects
                .filter((v) => v.articleID === articleID)
                .reduce(
                    (a, b) => (a && new Date(a.createdAt) > new Date(b.createdAt) ? a : b),
                    ArticleInitialProperties,
                ),
        );
        const ArticleChoices = uniqueArticles.map((article) => new AdminArticleModel(article));
        return ArticleChoices;
    }
}