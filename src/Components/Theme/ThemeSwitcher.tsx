import React from 'react';
import { useGlobalDispatch, useGlobalState } from '../../Global';
import { PayloadTheme } from '../../Global/types';

/** ThemeSwitcher */
export const ThemeSwitcher = () => {
    const state = useGlobalState();
    const dispatch = useGlobalDispatch();

    const setDark = () => {
        dispatch({ type: 'SET_Theme', payload: PayloadTheme.DARK });
    };

    const setLight = () => {
        dispatch({ type: 'SET_Theme', payload: PayloadTheme.LIGHT });
    };

    return (
        <button onClick={state.theme === PayloadTheme.LIGHT ? setDark : setLight}>
            Change Theme
        </button>
    );
};
