function max(number1, number2, number3) {
  if (number1 >= number2 && number1 >= number3 ) {
    return number1;
  }

  return max(number2, number3, number1);
}


console.log(max(5, 8, 2));
console.log(max(100, 100, 100));
console.log(max(110, 11, 10));