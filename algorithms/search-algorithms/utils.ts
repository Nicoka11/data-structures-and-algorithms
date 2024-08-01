export function swap<T>(array: T[], i1: number, i2: number) {
  [array[i1], array[i2]] = [array[i2], array[i1]];
  return;
}
