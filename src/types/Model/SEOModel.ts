export interface SEOInput {
    common: CommonSEOInput,
    og: OGSEOInput,
};
export interface CommonSEOInput {
    title: string,
    description: string,
    keywords: string,
};
export interface OGSEOInput {
    title: string,
    type: ArticleType,
    url: string,
    image: string,
    description: string,
    audio?: string | null,
    video?: string | null,
};
export enum ArticleType {
    website = "website",
    article = "article",
}
export const SEOInitialProperties: SEOInput = {
    common: { title: '', description: '', keywords: '' },
    og: {
        title: '',
        type: ArticleType.article,
        url: '',
        image: '',
        description: '',
        audio: null,
        video: null,
    }
};