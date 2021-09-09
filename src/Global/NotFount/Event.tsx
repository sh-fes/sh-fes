import React from 'react';
import { useLocation } from 'react-router';
import { useGlobalDispatch } from '..';

export function NotfoundEvent() {
    const dispatch = useGlobalDispatch();
    const location = useLocation();
    React.useEffect(() => {
        dispatch({ type: 'SET_Notfound', payload: false });
    }, [location, dispatch]);
    return <></>;
}
