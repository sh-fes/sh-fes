import { ThemeActionType, ThemePayloadType } from './theme/types'
import { ScrollActionType, ScrollPayloadType } from './Scroll/types'

export { ThemePayloadType as PayloadThemeType }
export type { ScrollPayloadType as PayloadScroll }

export interface Action<Type, Payload> {
    type: Type
    payload: Payload
}

export interface GlobalState {
    theme?: ThemePayloadType
    scroll?: ScrollPayloadType
}

export type ActionType =
    | ThemeActionType
    | ScrollActionType