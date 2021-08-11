import React from 'react';
import { useGlobalDispatch, useGlobalState } from '../../Global';
import { ThemePayloadType } from '../../Global/Theme/types';

/** ThemeSwitcher */
export const ThemeSwitcher = () => {
    const state = useGlobalState();
    const dispatch = useGlobalDispatch();

    const setDark = () => {
        dispatch({ type: 'SET_Theme', payload: ThemePayloadType.DARK });
    };

    const setLight = () => {
        dispatch({ type: 'SET_Theme', payload: ThemePayloadType.LIGHT });
    };

    return <button onClick={state.theme === ThemePayloadType.LIGHT ? setDark : setLight}>Change</button>;
};
