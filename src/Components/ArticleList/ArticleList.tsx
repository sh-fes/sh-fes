import { gql, useQuery } from '@apollo/client';
import { ListArticlesQueryVariables } from '../../API';
import { defaultClient } from '../../GraphqlClient';
import { ArticleModel, ListArticlesQuery } from '../../types';
import { ArticleListRenderer } from './ArticleListRenderer';

interface ArticleListProps {
    articleIDs?: string[];
    groupID?: string;
    title: string;
}
const ArticleList = ({ articleIDs, groupID, title }: ArticleListProps) => {
    const query = `query ListArticles($filter:ModelArticleFilterInput,$limit:Int,$nextToken:String){listArticles(filter:$filter,limit:$limit,nextToken:$nextToken){items{id,articleID,title,tags,thumb,author,createdAt,groupID,isActive},nextToken}}`;
    const { loading, data } = useQuery<ListArticlesQuery, ListArticlesQueryVariables>(gql(query), {
        client: defaultClient,
        variables: {
            filter: {
                groupID: groupID ? { eq: groupID } : undefined,
                isActive: { eq: true },
                isLatest: { eq: true },
                or: articleIDs?.map((articleID) => ({ articleID: { eq: articleID } })),
            },
        },
    });
    const articleArray = new ArticleListRenderer();
    articleArray.title = title;
    if (loading) articleArray.update({ isLoading: 'loading' });
    else if (data && data.listArticles.items.length > 0)
        articleArray.update({
            articles: data.listArticles.items.map((article) => new ArticleModel(article)),
            isLoading: 'loaded',
        });
    else articleArray.update({ isLoading: 'notfound' });
    return articleArray.render();
};

export default ArticleList;
