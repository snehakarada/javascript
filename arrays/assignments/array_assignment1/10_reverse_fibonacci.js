// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function fibonacciSeries(array, next, previous, current, nthTerm) {
  let newTerm = next;
  if (nthTerm === 0) {
    return array;
  }
  array.push(previous);
  newTerm = previous + current;

  return fibonacciSeries(array, newTerm, current, newTerm, nthTerm - 1);
}

function reverseFibonacci(n) {
  const array = fibonacciSeries([], 0, 0, 1, n);
  const revesredArray = [];
  const endIndex = array.length - 1;

  for (let index = 0; index <= endIndex; index++) {
    revesredArray[index] = array[endIndex - index];
  }

  return revesredArray;
}

console.log(reverseFibonacci(1));
console.log(reverseFibonacci(2));
console.log(reverseFibonacci(3));
console.log(reverseFibonacci(4));
console.log(reverseFibonacci(5));
console.log(reverseFibonacci(6));