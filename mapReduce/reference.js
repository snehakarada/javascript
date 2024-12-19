const add = function (a, b) {
  return a + b;
}

const diff = function (a, b) {
  return a - b;
}

function calculate(operation, num1, num2) {
  return operation(num1, num2);
}

const operation = prompt("enter the operation do you want\n0 -> add\n1 ->sub\n");
const num1 = +prompt('enter number1');
const num2 = +prompt('enter number2');
const arthematic = [add, diff];

console.log(calculate(arthematic[operation], num1, num2));
