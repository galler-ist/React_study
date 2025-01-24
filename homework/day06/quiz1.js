function splitAndCombine(arr) {
  arr1 = arr.slice(0, 4);
  arr2 = arr.slice(4);
  return arr2.concat(arr1);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);
