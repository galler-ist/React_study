// 1. 배열 순회

let arr = [1, 2, 3];

// 1.1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// 1.2. for of 반복문
for (let item of arr) {
  //   console.log(item);
}

// 2. 객체 순회
let person = {
  name: "백승우",
  age: 20,
  hobby: "테니스",
};

// 2.1. Object.keys 사용 (내장 함수)
// 객체에서 key 값들만 뽑아 새로운 배열로 반환

let keys = Object.keys(person);
for (let key of keys) {
  //   console.log(key, person[key]);
}

// 2.2. Object.values 사용

let values = Object.values(person);
for (let value of values) {
  // console.log(value);
}

// 2.3. for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
