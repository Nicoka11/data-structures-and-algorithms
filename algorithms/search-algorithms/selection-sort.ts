import { swap } from "./utils";

const original = [5, 6, 2, 8, 3, 10, 4];

function selectionSort(arr: number[]) {
  const sorted = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) swap(sorted, min, i);
  }
  return sorted;
}
