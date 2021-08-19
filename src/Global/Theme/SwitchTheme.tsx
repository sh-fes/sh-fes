import { useGlobalState } from '..';
import { PayloadTheme } from '../types';

export const SwitchTheme = () => {
    const state = useGlobalState();
    const root = document.querySelector('html');
    root?.setAttribute('data-theme', state.theme ?? PayloadTheme.LIGHT);
    return <></>;
};
