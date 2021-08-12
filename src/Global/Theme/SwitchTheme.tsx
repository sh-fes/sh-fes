import { useGlobalState } from '..';
import { ThemePayloadType } from './types';

export const SwitchTheme = () => {
    const state = useGlobalState();
    const root = document.querySelector('html');
    root?.setAttribute('data-theme', state.theme ?? ThemePayloadType.LIGHT);
    return <></>;
};