let o1 = { name: "백승우" };
let o2 = o1;
let o3 = { ...o1 };

console.log(o1 === o2);
console.log(o1 === o3);
console.log(o1 == o3);
