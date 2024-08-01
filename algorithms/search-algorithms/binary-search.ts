function binarySearchNumber(list: number[], value: number) {
  let p1: number = 0,
    p2: number = list.length - 1;
  let middle = Math.trunc((p2 + p1) / 2); // Middle point

  while (list[middle] !== value && p1 <= p2) {
    middle = Math.trunc((p2 + p1) / 2);

    if (value > list[middle]) {
      p1 = middle + 1;
    }
    if (value < list[middle]) {
      p2 = middle - 1;
    }
  }

  return list[middle] === value ? middle : -1;
}

console.log(
    binarySearchNumber(
    [1, 2, 4, 5, 7, 9, 15, 49, 75, 89, 91, 96, 100, 114, 168],
    91
  )
);
