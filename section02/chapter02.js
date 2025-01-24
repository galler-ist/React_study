// function returnFalse() {
//   return false;
// }

// function returnTrue() {
//   return true;
// }

// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
person1 = {
  name: "백승우",
};
printName(person1);
