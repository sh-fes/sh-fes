import { Reducer } from 'react';
import { GroupObjectArray } from './types/GroupObjectArray';
import { ActionType, AdminState } from './types/types';

/** AdminReducer */
type AdminReducerType = Reducer<AdminState, ActionType>;
export const AdminReducer: AdminReducerType = (state, action) => {
    switch (action.type) {
        case 'Username': return { ...state, Username: action.payload };
        case 'GroupObject': return { ...state, Group: action.payload };
        case 'GOH': return { ...state, GOH: { ...state.GOH, ...action.payload } };
        case 'AllGroup': return { ...state, AllGroup: action.payload };
        case 'AllGroup_Add':
            const AllGroup = Object.assign(new GroupObjectArray(), state.AllGroup);
            AllGroup.Add(action.payload);
            return { ...state, AllGroup };
        default:
            throw new Error(`No Operation Type ${action} found`);
    }
};