import { ScrollActionType, ScrollPayloadType } from './Scroll/types';
import { ThemeActionType, ThemePayloadType } from './Theme/types';

export { ThemePayloadType as PayloadTheme };
export type { ScrollPayloadType as PayloadScroll };

export interface Action<Type, Payload> {
    type: Type;
    payload: Payload;
}

export interface GlobalState {
    theme: ThemePayloadType;
    scroll: ScrollPayloadType;
}

export type ActionType =
    | ThemeActionType
    | ScrollActionType;
