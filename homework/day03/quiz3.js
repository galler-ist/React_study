function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  console.log(operation(num1, num2));
}

calculate(5, 3, add);
calculate(5, 3, subtract);
