import { Action } from '../../Global';

export enum ThemePayloadType {
    LIGHT = 'light',
    DARK = 'dark',
}

export type ThemeActionType =
    | Action<'SET_Theme', ThemePayloadType>