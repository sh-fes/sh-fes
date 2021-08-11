import { Action } from '../';

export interface ScrollPayloadType {
    up: boolean,
    down: boolean,
    last: number
}
export type ScrollActionType =
    | Action<'SET_Scroll', ScrollPayloadType>