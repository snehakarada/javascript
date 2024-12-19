function secondMax(number1, number2, number3) {
  if (number1 >= number2 && number1 >= number3 ) {
    return number2 > number3 ? number2 : number3;
  }

  return secondMax(number2, number3, number1);
}


console.log(secondMax(5, 8, 2));
console.log(secondMax(100, 100, 100));
console.log(secondMax(110, 11, 10));