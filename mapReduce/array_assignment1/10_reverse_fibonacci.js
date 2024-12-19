// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

const fibo = function ([newArr, previous], element, index, array) {
  newArr.unshift(element)
  array[index + 1] = element + previous;
  previous = element;
  return [newArr, previous];
}

const reverseFibonacci = function (number) {
  const arr = Array(number).fill(0).reduce(fibo, [[], 1]);
  return arr[0];
}

console.log(reverseFibonacci(1));
console.log(reverseFibonacci(2));
console.log(reverseFibonacci(3));
console.log(reverseFibonacci(4));
console.log(reverseFibonacci(5));
console.log(reverseFibonacci(6));