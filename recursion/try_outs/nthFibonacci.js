function nthFibonacci(number) {
  if (number === 1) {
    return 0;
  } 

  if (number === 2) {
    return 1;
  }

  return nthFibonacci(number - 1) + nthFibonacci(number - 2);
}

console.log(nthFibonacci(1));
console.log(nthFibonacci(2));
console.log(nthFibonacci(3));
console.log(nthFibonacci(4));
console.log(nthFibonacci(5));
console.log(nthFibonacci(6));