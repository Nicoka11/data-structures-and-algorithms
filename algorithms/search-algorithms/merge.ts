export function merge(arr1: number[], arr2: number[]) {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (arr1[i]) {
    result.push(...arr1.slice(i));
  }
  if (arr2[j]) {
    result.push(...arr2.slice(j));
  }

  return result;
}
