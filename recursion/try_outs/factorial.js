function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(7));