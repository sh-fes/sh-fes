import { Key } from "react";

interface ArrayObject<T> {
    [key: Key]: T;
}
interface SortGridProps {
    container: HTMLElement;
    itemElements: ArrayObject<HTMLElement>;
    gutter: number;
}
type TCol = number[];
function selectCol(cols: ArrayObject<TCol>, isMax?: boolean) {
    const colsHeight = Object.fromEntries(Object.entries(cols).map(([key, height]) => [key, height.reduce((a, b) => a + b, 0)]));
    return Object.entries(colsHeight).reduce((a, b) => (isMax ? a[1] >= b[1] : a[1] <= b[1]) ? a : b);
}

class SortGrid {
    private started = false;
    private container: HTMLElement;
    private itemsDefaultHeight: ArrayObject<number>;
    private itemsExpandHeight: ArrayObject<number>;
    private itemElements: ArrayObject<HTMLElement>;
    private gutter: number;
    get containerWidth() { return this.container.getBoundingClientRect().width; }
    set containerWidth(value: number) { this.container.style.width = `${value}px`; }
    get colWidth() { return Object.values(this.itemElements)[0].getBoundingClientRect().width + this.gutter; }
    constructor(props: SortGridProps) {
        if (!props.container) throw new Error("No container found");
        this.container = props.container;
        this.itemsDefaultHeight = {};
        this.itemsExpandHeight = {};
        this.itemElements = props.itemElements;
        this.gutter = props.gutter;
        this.mount();
    }
    private position(): void {
        let cols = this.createCols();
        let maxHeight = 0;
        let positions: ArrayObject<{ top: number, left: number; }> = Object.fromEntries(Object.entries(this.itemsDefaultHeight).map(([key, itemDefaultHeight]) => {
            let [colIndex, colHeight] = selectCol(cols);
            let topGutter = colHeight === 0 ? 0 : this.gutter;
            let position = { top: colHeight + topGutter, left: this.colWidth * Number(colIndex) };
            cols[colIndex].push(itemDefaultHeight + this.itemsExpandHeight[key] + topGutter);
            return [key, position];
        }));
        maxHeight = Object.entries(cols).filter(arr => arr[1].length !== 0).map(([key, height]) => height.reduce((a, b) => a + b)).reduce((a, b) => a > b ? a : b, 0);
        this.setPosition(positions, maxHeight);
    }
    private mount(): void {
        if (this.started) return;
        this.container.style.position = 'relative';
        this.container.style.margin = `${this.gutter}px`;
        this.containerWidth = Math.floor((this.containerWidth / this.colWidth) || 1) * (this.colWidth + this.gutter) - this.gutter;
        for (const item in this.itemElements) {
            this.itemElements[item].style.position = 'absolute';
            this.itemElements[item].style.margin = 'revert';
        }
        this.started = true;
    }
    private createCols(): ArrayObject<TCol> {
        let numCols = Math.floor(this.containerWidth / this.colWidth) || 1;
        let cols: ArrayObject<TCol> = Object.fromEntries([...Array(numCols).keys()].map(i => [i, []]));
        return cols;
    }
    public unmount(): null {
        this.container.style.position = '';
        return null;
    }
    private setPosition(positions: ArrayObject<{ top: number, left: number; }>, maxHeight: number): void {
        this.container.style.height = `${maxHeight}px`;
        for (const item in this.itemElements) {
            this.itemElements[item].style.top = `${positions[item].top}px`;
            this.itemElements[item].style.left = `${positions[item].left}px`;
        }
    }
    public bind(key: Key): void {
        this.itemsDefaultHeight[key] = this.itemElements[key].getBoundingClientRect().height;
        this.itemsExpandHeight[key] = 0;
        if (Object.keys(this.itemsExpandHeight).length === Object.keys(this.itemElements).length) { this.position(); }
    }
    public unbind(key: Key): void { delete this.itemsExpandHeight[key]; }
    public update(key: Key, height: number): void {
        this.itemsExpandHeight[key] = height;
        this.position();
    }
}
export default SortGrid;