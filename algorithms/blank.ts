function charCount(input: string): object {
  if (!input || typeof input !== "string") return {};

  const result = {} as Record<string, number>;

  for (const letter of input) {
    if (/[A-z]/g.test(letter)) {
      typeof result[letter] === "number"
        ? (result[letter] += 1)
        : (result[letter] = 1);
    }
  }

  return result;
}

function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  // loop over first array, for every element try to find its squared value in the second array, if no value found then return false.
  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) return false;
    arr2.splice(index, 1);
  }

  return true;
}

function validAnagram(s1: string, s2: string) {
  if (s1.length !== s2.length) return false;

  const fc1: Record<string, number> = {},
    fc2: Record<string, number> = {};

  for (const char of s1) {
    fc1[char] = (fc1[char] || 0) + 1;
  }
  for (const char of s2) {
    fc2[char] = (fc2[char] || 0) + 1;
  }

  for (const key in fc1) {
    if (!(key in fc2) || fc1[key] !== fc2[key]) return false;
  }

  return true;
}

function sumZeroUnoptimized(arr: number[]): [number, number] | undefined {
  let currentIteration = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(currentIteration, "current");
      currentIteration++;
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

function countUniqueValues(arr: number[]): number {
  let uniques = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) uniques += 1;
  }
  return uniques;
}

function countUniqueValuesMap(arr: number[]): number {
  const uniques = new Set(arr);
  return uniques.size;
}

function sameFrequency(n1: number, n2: number): boolean {
  if (n1.toString().length !== n2.toString().length) return false;

  const fc1: Record<string, number> = {};
  const fc2: Record<string, number> = {};

  for (const char of n1.toString()) {
    fc1[char] = (fc1[char] || 0) + 1;
  }
  for (const char of n2.toString()) {
    fc2[char] = (fc2[char] || 0) + 1;
  }

  for (const key in fc1) {
    if (!(key in fc2) || fc1[key] !== fc2[key]) return false;
  }

  return true;
}

function areThereDuplicatesWithSet(...numbers: (number | string)[]) {
  if (numbers.length < 2) return false;
  const uniques = new Set(numbers);

  return uniques.size !== numbers.length;
}

function averagePair(list: number[], target: number) {
  const average = (a: number, b: number): number => (a + b) / 2;

  for (let i = 0; i < list.length; i++) {
    if (average(list[i], list[i + 1]) === target) return true;
  }

  return false;
}

// This solution as a O(n^2), because of imbrication of for loops, although it works it can be done with fewer looping
function maxSubarraySum(arr: number[], range: number) {
  if (range > arr.length) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let res = 0;
    for (let j = i; j < i + range; j++) {
      console.log("iteration number", i, arr[j]);
      res += arr[j];
    }

    if (res > max) max = res;
  }

  return max;
}

function maxSubArraySumOptimized(arr: number[], num: number) {
  if (num > arr.length) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }

  return total;
}

function minSubArrayLen(arr: number[], target: number) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {}
}

function factorial(num: number): number {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function powerFn(num: number, power: number): number {
  if (power === 0) return 1;
  if (power === 1) return num;
  return num * powerFn(num, power - 1);
}

function productOfArrayIterative(array: number[]) {
  let sum = 1;
  for (const num of array) {
    sum = sum * num;
  }
  return sum;
}

function productOfArrayRecursive(array: number[]) {
  let product = 1;

  const helper = (arrayH: number[]) => {
    if (arrayH.length === 0) return;

    product *= arrayH[0];

    helper(arrayH.slice(1));
  };

  helper(array);

  return product;
}

function recursiveRange(initial: number): number {
  if (!initial) return 0;
  return initial + recursiveRange(initial - 1);
}

function fib(index: number) {
  let suite = [1, 1],
    currentIndex = 3;

  const recursive = (suite: number[], currentIndex: number, index: number) => {
    suite.push(suite[suite.length - 1] + suite[suite.length - 2]);

    if (currentIndex === index) return;

    currentIndex++;
    recursive(suite, currentIndex, index);
  };

  recursive(suite, currentIndex, index);

  return suite[suite.length - 1];
}

function fibSimple(n: number) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

