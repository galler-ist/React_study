function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

let varB = function funcB() {
  console.log("funcB");
};

varB();

// 2. 화살표 함수
// let varC = (value) => value + 1;
let varC = (value) => {
  console.log(value);
  return value + 1;
};

resultC = varC(10);
console.log(resultC);
