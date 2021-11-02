import { Layout } from '..';
import Style from '../../App.module.scss';
import { Article, ArticleModel } from '../../types';
import { MarkdownConverter } from '../Markdown';
import { ArticleHeader } from './ArticleHeader';

type LoadingStatus = 'loading' | 'loaded' | 'notfound';
export class ArticleRenderer extends ArticleModel {
    public isLoading: LoadingStatus;
    constructor(article?: Article) {
        super(article);
        this.isLoading = 'loading';
    }
    public update(option: { article?: Article; isLoading?: LoadingStatus }) {
        // default
        if (option.article) this._update(option.article);
        // extends
        if (option.isLoading) this.isLoading = option.isLoading;
    }
    render() {
        switch (this.isLoading) {
            case 'loading':
                return this.renderLoading();
            case 'loaded':
                return this.renderMain();
            default:
                return null;
        }
    }
    renderLoading() {
        return (
            <Layout layout='article'>
                <p>Loading...</p>
            </Layout>
        );
    }
    renderMain() {
        return (
            <Layout layout='article'>
                <article className={Style.Article}>
                    <ArticleHeader title={this.title} />
                    <MarkdownConverter className={Style.Markdown} content={this.content} />
                </article>
            </Layout>
        );
    }
}
