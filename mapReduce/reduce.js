const add = function add(number1, number2, array) {
  return number1 + number2;
}

function isOdd(intial, element, array) {
  if (element % 2 === 1) {
    intial.push(element);
  }

  return intial;
}

function square(intial, element, array) {
  intial.push(element * element);
  return intial;
}

const arr = [1, 2, 3, 5];
console.log(arr.reduce(isOdd, []).reduce(square, []).reduce(add, 0));