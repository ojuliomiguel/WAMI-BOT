export function isNumeric(value: any): boolean {
    return /^-?\d+$/.test(value);
}