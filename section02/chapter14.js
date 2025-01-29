// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 promise를 반환하도록 변환해주는 그런 키워드

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    name: "백승우",
    id: "galler",
  };
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "백승우",
        id: "galler",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data);
}
