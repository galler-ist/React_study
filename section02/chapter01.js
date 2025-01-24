// 1. Falsy한 값(7종류)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInteger, 아주 큰 값, 웹개발에서는 잘 안 쓰임
let f8 = [];

// if (!f1) {
//   console.log(`${f1}이 거짓이다`);
// }
// if (!f2) {
//   console.log(`${f2}이 거짓이다`);
// }
// if (!f3) {
//   console.log(`${f3}이 거짓이다`);
// }
// if (!f4) {
//   console.log(`-0이 거짓이다`);
// }
// if (!f5) {
//   console.log(`${f5}이 거짓이다`);
// }
// if (!f6) {
//   console.log(`""이 거짓이다`);
// }
// if (!f7) {
//   console.log(`${f7}이 거짓이다`);
// }

// if (f8) {
//   console.log(`f8은 []이며 진실이다`);
// }

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "백승우" };
printName(person);
