let num = 11;

if (num >= 10) {
  console.log("num은 10 이상입니다");
  console.log(`num은 ${num}입니다`);
} else {
  console.log("num은 10 미만입니다");
}

let animal = "tigerㅇ";

switch (animal) {
  case "cat": {
    console.log("고양이");
  }
  case "dog": {
    console.log("강아지");
  }
  case "bear": {
    console.log("곰");
  }
  case "snake": {
    console.log("뱀");
  }
  case "tiger": {
    console.log("호랑이");
  }
  default: {
    console.log("그런 동물은 전 모릅니다다");
  }
}
