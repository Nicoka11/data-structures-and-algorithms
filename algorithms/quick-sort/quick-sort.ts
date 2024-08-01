import { pivot } from "./pivot";

function quickSort(arr: number[], start: number = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotPoint = pivot(arr, start, end);

    // left
    quickSort(arr, start, pivotPoint - 1);
    // right
    quickSort(arr, pivotPoint + 1, end);
  }

  return arr;
}

console.log(quickSort([71, 12, 130, 3, 110, 8, 90, 150, 40]));
