// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// console.log(date1);

let date2 = new Date("2000-01-01/10:10:10");
let date3 = new Date(2000, 1, 1, 10, 10, 10);
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(협정세계시, UTC) 로 부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1); // date1과 date4의 값이 같다.

// console.log(JSON.stringify(date1) === JSON.stringify(date4));

// 3. 시간 요소 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //getMonth의 월은 index가 0부터 시작하기 때문에 1을 추가해서 사용
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(10); // 11월
date1.setDate(20);
date1.setHours(9);
date1.setMinutes(59);
date1.setSeconds(59);

// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Mon Nov 20 2023
console.log(date1.toLocaleString()); // 2023. 11. 20. 오전 9:59:59
