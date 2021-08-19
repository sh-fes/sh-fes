import { NotfoundActionType, NotfoundPayloadType } from './NotFount/types'
import { ScrollActionType, ScrollPayloadType } from './Scroll/types'
import { ThemeActionType, ThemePayloadType } from './Theme/types'

export { ThemePayloadType as PayloadTheme }
export type { ScrollPayloadType as PayloadScroll }
export type { NotfoundPayloadType as PayloadNotfound }

export interface Action<Type, Payload> {
    type: Type
    payload: Payload
}

export interface GlobalState {
    theme: ThemePayloadType
    scroll: ScrollPayloadType
    isNotfound: NotfoundPayloadType
}

export type ActionType =
    | ThemeActionType
    | ScrollActionType
    | NotfoundActionType