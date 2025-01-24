// 함수
function getArea(width, height = 100) {
  let area = width * height;

  console.log(area);
  return area;
}

let area1 = getArea(10, 20);
console.log(area1);
