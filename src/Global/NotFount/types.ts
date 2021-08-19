import { Action } from '..';

export type NotfoundPayloadType = boolean

export type NotfoundActionType =
    | Action<'SET_Notfound', boolean>