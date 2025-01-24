// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링
// 필터링하여 새로운 배열로 변환

let arr1 = [
  { name: "백승우", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
  { name: "김철수", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople);
// filter 메서드는 특정 조건에 의해 검색, 카테고리별 필터에서 매우 중요하게 사용하는 기능

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
// forEach와 비슷하게 작동하며, return값을 설정하여 새로운 배열로 반환가능
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

// map 사용 예시

let names = arr1.map((item) => item.name);
// console.log(names); // ['백승우', '홍길동', '김철수']

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// sort는 문자열은 배열을 잘 함, 하지만 숫자의 대소관계로 정렬하려면 callback함수 사용
let arr3 = ["b", "a", "c"];
arr3.sort(); // 호출만 해도 자동으로 배열들을 정렬해줌

let arr4 = [2, 10, 2, 3, 5, 2, 2];
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1; // return 양수 -> 더 작은 값이 앞으로 오게 됨 -> b,a 배치
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1; // a,b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a,b 자리를 그대로 유지
  }
});
const arr10 = [
  { value: 2, name: "A" },
  { value: 1, name: "B" },
  { value: 2, name: "C" },
  { value: 3, name: "D" },
  { value: 3, name: "A" },
];
arr10.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  } else if (a.value < b.value) {
    return -1;
  } else {
    return 0;
  }
});

console.log(arr10);

// 4. toSorted
// sort와 같은 방식이지만, 원본 배열은 유지한 채 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5.join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 = ["hi", "im", "seungwoo"];
const joined = arr6.join((sep = " "));
// console.log(joined);
