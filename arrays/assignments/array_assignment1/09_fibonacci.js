// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
function fibonacci(n) {
  let previous = 0;
  let current = 1;
  const array = [];

  for (let index = array.length; index < n; index++) {
    array.push(previous);
    const newTerm = previous + current;
    previous = current;
    current = newTerm;
  }
  return array;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));