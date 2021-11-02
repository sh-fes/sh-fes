import { Action } from '../';

export interface ScrollPayloadType {
    up: boolean,
    down: boolean,
}
export type ScrollActionType =
    | Action<'SET_Scroll', ScrollPayloadType>;