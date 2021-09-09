import { Reducer } from 'react';
import { ActionType, AdminState } from './types';

/** AdminReducer */
type AdminReducerType = Reducer<AdminState, ActionType>;
export const AdminReducer: AdminReducerType = (state, action) => {
    switch (action.type) {
        case 'setGroup': return { ...state, Group: action.payload }
        case 'setUsername': return { ...state, Username: action.payload }
        default:
            throw new Error(`No Operation Type ${action} found`);
    }
};