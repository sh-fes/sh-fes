import React, { useEffect } from 'react';
import { useGlobalDispatch, useGlobalState } from '..';
import { ScrollPayloadType } from './types';

export function ScrollEvent() {
    const state = useGlobalState();
    const dispatch = useGlobalDispatch();
    useEffect(() => {
        const handle = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            const payload: ScrollPayloadType = {
                up: st > (state.scroll?.last ?? 0),
                down: st < (state.scroll?.last ?? 0),
                last: st <= 0 ? 0 : st,
            };
            dispatch({ type: 'SET_Scroll', payload });
        };
        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    });
    return <></>;
}
