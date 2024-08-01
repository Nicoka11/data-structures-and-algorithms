function insertionSort(arr: number[]) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    for (j = i - 1; j > -1; j--) {
      if (arr[j] > curr) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = curr;
  }
  return arr;
}

console.log(insertionSort([1, 4, 3, 71, 12, 130, 110, 8, 90, 150, 124, 98]));
