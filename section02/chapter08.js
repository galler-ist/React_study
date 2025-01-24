// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하며, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // 인수로 콜백함수를 넣으면 됨
  //   console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
// 반환값은 T/F
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아 반환하는 메서드
// 특정 요소가 여러 개 있으면 맨 앞에 있는 인덱스를 반환
// 없으면 -1 반환
// indexOf는 원시 타입이 아닌 객체 타입의 값들이 저장된 배열에서는 위치를 못 찾음
// 그 이유는 얕은 비교(=== / 참조값 기준)를 하기 때문
// 즉, 특정 객체값이 존재하는지는 찾아낼 수 없음
// 즉, 단순한 원시 타입의 값을 찾을 때 사용
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 복잡한 객체 값도 조건식만 잘 만들면 쉽게 찾을 수 있다.
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//   if (item % 2 === 1) return true;
// });
const findedIndex = arr4.findIndex((item) => item % 2 === 1);

let objectArr = [{ name: "백승우" }, { name: "홍길동" }];

// console.log(objectArr.indexOf({ name: "백승우" })); // -1
// console.log(objectArr.findIndex((item) => item.name === "백승우")); // 0

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
// 여기서는 item(그 객체 자체)이 반환됨
let arr5 = [{ name: "백승우" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name == "백승우");
console.log(finded);
