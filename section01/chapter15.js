// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "백승우",
  age: 20,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  더보기2: {},
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1. 특정 프로퍼티에 접근 (점, 괄호)
let name = person.name;

let age = person["age"];

// 3.2. 새로운 프로퍼티를 추가하는 방법
person.food = "meat";
person["favoriteFood"] = "real meat";

// 3.3 프로퍼티를 수정하는 방법
person.job = "student";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
