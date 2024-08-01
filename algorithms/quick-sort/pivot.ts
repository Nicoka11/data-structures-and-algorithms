import { swap } from "../utils";

/**
 * A helper function that places the first element of an array in the right place,
 * by moving lower elements to the left, and higher elements to the right.
 *
 * The first element of the array is always the on moved (first element from startIndex or 0)
 * @returns new index of the placed element
 */
export function pivot(
  arr: number[],
  startIndex: number = 0,
  endIndex: number = arr.length + 1
) {
  const pivotElement = arr[startIndex];
  let swapIndex = startIndex;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivotElement > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, startIndex, swapIndex);
  return swapIndex;
}

// const array = [71, 12, 130, 3, 110, 8, 90, 150, 40];
// console.log(pivot(array), { array });
