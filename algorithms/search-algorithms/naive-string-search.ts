function naiveStringSearch(input: string, toSearch: string) {
  if (input.length < toSearch.length) return 0;
  let occurences = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === toSearch[0]) {
      for (let j = 1; j < toSearch.length; j++) {
        if (j === toSearch.length - 1) occurences++;
        if (input[i + j] !== toSearch[j])
          // If J is at the last index
          break;
      }
    }
  }

  return occurences;
}

console.log(naiveStringSearch("odaromgauidomgadubifafaomgomg", "omg"));
