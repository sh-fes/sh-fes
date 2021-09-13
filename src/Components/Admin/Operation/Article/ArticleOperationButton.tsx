import { gql, useLazyQuery } from '@apollo/client';
import { Button, ButtonGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ArticleByArticleIDQueryVariables } from '../../../../API';
import { defaultClient } from '../../../../GraphqlClient';
import { useAdminDispatch, useAdminState } from '../../AdminContext';
import { ArticleByArticleIDQuery } from '../../types/API';
import { ArticleObject } from '../../types/ArticleObject';

export const OperationButton = ({ className }: { className?: string }) => {
    const state = useAdminState();
    const dispatch = useAdminDispatch();
    const [DisableCreate, sCreate] = useState(true);
    const [DisableUpdate, sUpdate] = useState(true);
    const [DisableActivate, sActivate] = useState(true);
    const [DisableDeactivate, sDeactivate] = useState(true);
    const GraphqlArticleByArticleID = `query LA($articleID:ID!){ArticleByArticleID(articleID:$articleID,sortDirection:DESC){items{id,articleID,title,content,tags,thumb,author,createdAt,groupID,isActive,updatedAt,group{items{id,groupID,groupName,groupKind,tags,icon,thumb,author,createdAt,isActive,updatedAt}},recommend{items{id,articleID,title,tags,thumb,author,createdAt,isActive,updatedAt},nextToken}}}}`;
    const [getArticleListByArticleID] = useLazyQuery<
        ArticleByArticleIDQuery,
        ArticleByArticleIDQueryVariables
    >(gql(GraphqlArticleByArticleID), {
        client: defaultClient,
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            const archive = data.ArticleByArticleID.items.filter((item) => item.isActive);
            if (archive.length > 0) {
                const article = archive[0];
                const payload = new ArticleObject(article);
                payload.isActive = true;
                dispatch({ type: 'ArticleObject', payload });
            }
        },
    });
    useEffect(
        () => sCreate(state.AOH.CurrentOperation ? true : state.Article.articleID !== ''),
        [sCreate, state.AOH.CurrentOperation, state.Article.articleID],
    );
    useEffect(
        () => sUpdate(state.AOH.CurrentOperation ? true : state.Article.articleID === ''),
        [sUpdate, state.AOH.CurrentOperation, state.Article.articleID],
    );
    useEffect(
        () =>
            sActivate(
                state.AOH.CurrentOperation
                    ? true
                    : state.Article.articleID === ''
                    ? true
                    : state.Article.isActive,
            ),
        [sActivate, state.AOH.CurrentOperation, state.Article.articleID, state.Article.isActive],
    );
    useEffect(
        () =>
            sDeactivate(
                state.AOH.CurrentOperation
                    ? true
                    : state.Article.articleID === ''
                    ? true
                    : !state.Article.isActive,
            ),
        [sDeactivate, state.AOH.CurrentOperation, state.Article.articleID, state.Article.isActive],
    );
    function Create() {
        dispatch({
            type: 'AOH',
            payload: { CurrentOperation: 'CREATE', DisableEditor: false, DisableSubmit: false },
        });
        const payload = new ArticleObject();
        dispatch({ type: 'ArticleObject', payload });
    }
    function Update() {
        dispatch({
            type: 'AOH',
            payload: { CurrentOperation: 'UPDATE', DisableEditor: false, DisableSubmit: false },
        });
    }
    function Activate() {
        dispatch({
            type: 'AOH',
            payload: { CurrentOperation: 'RECREATE', DisableEditor: true, DisableSubmit: false },
        });
        const variables: ArticleByArticleIDQueryVariables = { articleID: state.Article.articleID };
        getArticleListByArticleID({ variables });
    }
    function Deactivate() {
        dispatch({
            type: 'AOH',
            payload: { CurrentOperation: 'DELETE', DisableEditor: true, DisableSubmit: false },
        });
        const payload = new ArticleObject();
        payload.articleID = state.Article.articleID;
        payload.groupID = state.Article.groupID;
        payload.title = state.Article.title;
        payload.author = state.Username;
        payload.isActive = false;
        dispatch({ type: 'ArticleObject', payload });
    }
    return (
        <ButtonGroup variant='contained' className={className}>
            <Button onClick={Create} disabled={DisableCreate}>
                作成
            </Button>
            <Button onClick={Update} disabled={DisableUpdate}>
                編集
            </Button>
            <Button onClick={Activate} disabled={DisableActivate}>
                有効化
            </Button>
            <Button onClick={Deactivate} disabled={DisableDeactivate}>
                無効化
            </Button>
        </ButtonGroup>
    );
};
