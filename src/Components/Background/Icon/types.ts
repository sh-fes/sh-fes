interface PathBase<T = String, V = Array<Number>> { t: T; v: V; }
export interface PathH extends PathBase<'H' | 'h', [n: number]> { }
export interface PathV extends PathBase<'V' | 'v', [n: number]> { }
export interface PathM extends PathBase<'M' | 'm', [x1: number, y1: number]> { }
export interface PathL extends PathBase<'L' | 'l', [x1: number, y1: number]> { }
export interface PathT extends PathBase<'T' | 't', [x1: number, y1: number]> { }
export interface PathS extends PathBase<'S' | 's', [x1: number, y1: number, x2: number, y2: number]> { }
export interface PathQ extends PathBase<'Q' | 'q', [x1: number, y1: number, x2: number, y2: number]> { }
export interface PathC extends PathBase<'C' | 'c', [x1: number, y1: number, x2: number, y2: number, x3: number, y3: number]> { }
export interface PathA extends PathBase<'A' | 'a', [x1: number, y1: number, r: number, a: number, s: number, x2: number, y2: number]> { }
export interface PathZ extends PathBase<'Z' | 'z', []> { }
export type PathType = PathH | PathV | PathM | PathL | PathT | PathS | PathQ | PathC | PathA | PathZ;