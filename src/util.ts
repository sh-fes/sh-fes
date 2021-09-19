export function charRange(a: string, b: string): string[] {
    const from = a.charCodeAt(0);
    const to = b.charCodeAt(0);
    return Array.from(Array(to - from + 1), (v, k) => String.fromCharCode(k + from));
}
export const a2z = charRange('a', 'z');
export const A2Z = charRange('A', 'Z');
export const a2Z = Array<string>().concat(a2z, A2Z);
export function randomString(c: string[], l: number) {
    const cl = c.length;
    return Array.from(Array(l), (v, k) => c[Math.floor(Math.random() * cl)]).join('');
}