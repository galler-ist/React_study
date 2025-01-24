function main(value) {
  value();
}

function sub() {
  // console.log("I am sub");
}

// main(sub);

// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// function repeatN(N, count) {
//   for (let idx = 1; idx <= count; idx++) console.log(idx * N);
// }

// repeat(5);
// repeatN(3, 5);

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});
