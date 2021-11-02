import React, { useEffect, useRef } from 'react';
import { useGlobalDispatch, useGlobalState } from '..';

export function ScrollEvent() {
    const state = useGlobalState();
    const dispatch = useGlobalDispatch();
    const scroll = useRef<number>(window.pageYOffset || document.documentElement.scrollTop);
    const onScroll = () => {
        const current = window.pageYOffset || document.documentElement.scrollTop;
        if ((scroll.current > current) === state.scroll.up) {
            dispatch({
                type: 'SET_Scroll',
                payload: { up: state.scroll.down, down: state.scroll.up },
            });
            scroll.current = current;
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    });
    return <></>;
}
