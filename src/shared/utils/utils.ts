export function toCamelCase(str: string) {
  return str
    .split(' ')
    .map((word: string, index: number) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}