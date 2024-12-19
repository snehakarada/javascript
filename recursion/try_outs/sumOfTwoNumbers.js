function sumOfTwoNumbers(number1, number2) {
  if (number2 === 0) {
    return number1;
  }

  return 1 + sumOfTwoNumbers(number1, number2 - 1); 
}

console.log(sumOfTwoNumbers(2,3));
console.log(sumOfTwoNumbers(2,0));
console.log(sumOfTwoNumbers(0,3));
console.log(sumOfTwoNumbers(2,2));