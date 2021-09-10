import { Reducer } from 'react';
import { ActionType, AdminState } from './types';

/** AdminReducer */
type AdminReducerType = Reducer<AdminState, ActionType>;
export const AdminReducer: AdminReducerType = (state, action) => {
    switch (action.type) {
        case 'Username': return { ...state, Username: action.payload };
        case 'GroupObject': return { ...state, Group: action.payload };
        case 'GOH': return { ...state, GOH: { ...state.GOH, ...action.payload } };
        default:
            throw new Error(`No Operation Type ${action} found`);
    }
};