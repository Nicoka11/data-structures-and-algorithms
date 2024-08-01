import { merge } from "./merge";

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([1, 4, 3, 71, 12, 130, 110, 8, 90, 150, 124, 98]));
