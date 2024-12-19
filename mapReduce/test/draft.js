const isEven = function (number) {
  console.log(number);
  return number % 2 === 0;
}

console.log([[4, 2], [2], [2]].every(isEven));