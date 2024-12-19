// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
const fibo = function ([newArr, previous], element, index, array) {
  newArr.push(element)
  array[index + 1] = element + previous;
  previous = element;
  return [newArr, previous];
}

const fibonacci = function (number) {
  const arr = Array(number).fill(0).reduce(fibo, [[], 1]);
  return arr[0];
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));