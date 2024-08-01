function reverse(text: string) {
  let newStr = "";
  const rec = (t: string) => {
    if (t.length === 0) return;
    newStr += t[t.length - 1];
    rec(t.slice(0, -1));
  };
  rec(text);

  return newStr;
}

function isPalindrome(word: string) {
  let result = true;
  const loop = (str: string) => {
    if (str[0] !== str[str.length - 1]) {
      result = false;
      return;
    }

    if (str.length <= 1) return true;
    loop(str.slice(1, -1));
  };

  loop(word);

  return result;
}

function someRecursive<T>(array: T[], callback: (el: T) => boolean) {
  let result = false;
  const loop = (arr: T[]) => {
    if (!arr.length) return;
    if (callback(arr[0])) {
      result = true;
      return;
    }
    loop(arr.slice(1));
  };
  loop(array);
  return result;
}

function flatten<T>(list: T[]) {
  const flat: T[] = [];

  const loop = (arr: T[]) => {
    if (arr.length === 0) return;
    if (typeof arr[0] === "object") {
      loop(arr[0] as T[]);
    } else {
      flat.push(arr[0]);
    }
    loop(arr.slice(1));
  };

  loop(list);

  return flat;
}

function capitalize(arr: string[]) {
  const res: string[] = [];

  const loop = (arr: string[]) => {
    if (arr.length === 0) return;

    res.push(arr[0][0].toUpperCase() + arr[0].slice(1));

    loop(arr.slice(1));
  };

  loop(arr);

  return res;
}
