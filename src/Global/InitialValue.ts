import { GlobalState, PayloadThemeType } from "./types";

export const InitialValue: GlobalState = {
    theme: PayloadThemeType.LIGHT,
    scroll: { up: false, down: true, last: 0 }
}