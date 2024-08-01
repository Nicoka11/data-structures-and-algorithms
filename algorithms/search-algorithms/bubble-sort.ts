import { swap } from "./utils";

function bubbleSortNumbers(array: number[]) {
  const sorted = array;
  let cleanLoop = false;

  for (let i = array.length - 1; i > 0; i--) {
    cleanLoop = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(sorted, j, j + 1);
        cleanLoop = false;
      }
    }
    if (cleanLoop) break;
  }

  return sorted;
}

console.log(bubbleSortNumbers([5, 9, 1, 17, 13, 25]));
