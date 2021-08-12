import { GlobalState, PayloadThemeType } from "./types";

const PrefersColorSchema = () => { return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? PayloadThemeType.DARK : PayloadThemeType.LIGHT }

export const InitialValue: GlobalState = {
    theme: PrefersColorSchema(),
    scroll: { up: false, down: true, last: 0 }
}