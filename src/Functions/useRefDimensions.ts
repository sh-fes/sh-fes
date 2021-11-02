import { RefObject, useEffect, useState } from "react";

export interface RectState {
    width: number;
    height: number;
}
export interface Rect<T extends Element = Element> extends RectState {
    current: T | null;
}
const useRefDimensions = <T extends Element = Element>(ref: RefObject<T>) => {
    const [dimensions, setDimensions] = useState<RectState>({ width: 0, height: 0 });
    useEffect(() => {
        if (ref.current) {
            const { current } = ref;
            const boundingRect = current.getBoundingClientRect();
            const { width, height } = boundingRect;
            setDimensions({ width, height });
        }
    }, [ref]);
};

export default useRefDimensions;