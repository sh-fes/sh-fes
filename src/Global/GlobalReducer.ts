import { Reducer } from 'react';
import { ActionType, GlobalState } from './types';

/** GlobalReducer */
type GlobalReducerType = Reducer<GlobalState, ActionType>;
export const GlobalReducer: GlobalReducerType = (state, action) => {
    switch (action.type) {
        case 'SET_Theme':
            return { ...state, theme: action.payload };
        case 'SET_Scroll':
            return { ...state, scroll: action.payload };
        case 'SET_Notfound':
            return { ...state, isNotfound: action.payload };
        default:
            throw new Error(`No Operation Type ${action} found`);
    }
};
