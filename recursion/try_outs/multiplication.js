function multiplication(number1, number2) {
  if (number2 === 0) {
    return 0;
  }

  return number1 + multiplication(number1, number2 - 1);
}

console.log(multiplication(2, 3));
console.log(multiplication(0, 0));
console.log(multiplication(0, 10));
console.log(multiplication(2, 0));
console.log(multiplication(20, 30));