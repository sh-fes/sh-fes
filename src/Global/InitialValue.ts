import { GlobalState, PayloadTheme } from "./types";

const PrefersColorSchema = () => { return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? PayloadTheme.DARK : PayloadTheme.LIGHT }

export const InitialValue: GlobalState = {
    theme: PrefersColorSchema(),
    scroll: { up: false, down: true, last: 0 },
    isNotfound: false,
}