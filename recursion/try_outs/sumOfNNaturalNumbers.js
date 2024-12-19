function sumOfNNaturalNumbers(number) {
  if (number === 0) {
    return 0;
  }

  return number + sumOfNNaturalNumbers(number - 1);
}

console.log(sumOfNNaturalNumbers(5));

