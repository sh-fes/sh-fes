import { Reducer } from 'react';
import { AdminArticleObjectArray } from './types';
import { AdminGroupObjectArray } from './types/GroupModelArray';
import { ActionType, AdminState } from './types/types';

/** AdminReducer */
type AdminReducerType = Reducer<AdminState, ActionType>;
export const AdminReducer: AdminReducerType = (state, action) => {
    switch (action.type) {
        case 'Username': return { ...state, Username: action.payload };

        case 'GOH': return { ...state, GOH: { ...state.GOH, ...action.payload } };
        case 'GroupObject': return { ...state, Group: action.payload };
        case 'AllGroup': return { ...state, AllGroup: action.payload };
        case 'AllGroup_Add':
            const AllGroup = Object.assign(new AdminGroupObjectArray(), state.AllGroup);
            AllGroup.Add(action.payload);
            return { ...state, AllGroup };

        case 'AOH': return { ...state, AOH: { ...state.AOH, ...action.payload } };
        case 'ArticleObject': return { ...state, Article: action.payload };
        case 'AllArticle': return { ...state, AllArticle: action.payload };
        case 'AllArticle_Add':
            const AllArticle = Object.assign(new AdminArticleObjectArray(), state.AllArticle);
            AllArticle.Add(action.payload);
            return { ...state, AllArticle };
        default:
            throw new Error(`No Operation Type ${action} found`);
    }
};