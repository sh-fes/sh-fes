import React from 'react';
import Style from '../../App.module.scss';
import { ArticleModel, ArticleModelArray } from '../../types';
import { LoadingStatus } from '../../util';
import { GroupHeader } from '../GroupHeader';
import { ArticleListMain } from './ArticleListMain';

export class ArticleListRenderer extends ArticleModelArray {
    public isLoading: LoadingStatus;
    constructor(articles?: ArticleModel[]) {
        super(articles);
        this.isLoading = 'loading';
    }
    public update(option: { articles?: ArticleModel[]; isLoading?: LoadingStatus }) {
        if (option.articles) this._update(option.articles);
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
            <div className={Style.CardList}>
                <GroupHeader title={this.title} />
                <p>Loading...</p>
            </div>
        );
    }
    renderMain() {
        return (
            <div className={Style.CardList}>
                <GroupHeader title={this.title} />
                <ArticleListMain gutter={6} articles={this.ArticleModels} />
            </div>
        );
    }
}
