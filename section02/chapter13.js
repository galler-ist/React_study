function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// const p = add10(0);
// p.then((result) => {
//   console.log(result);
// });

// // then 메서드
// promise.then((value) => {
//   console.log(value);
// });

// promise.catch((error) => {
//   console.log(error);
// });

// // promise chaining
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(promise);
// setTimeout(() => {
//   console.log(promise);
// }, 2000);
