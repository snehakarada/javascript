const recursion = function (array, intial, index) {
  if (index === array.length) {
    return intial;
  }

  intial = intial + array[index];

  return recursion(array, intial, index + 1);
}

console.log(recursion([1, 2, 3, 4], 0, 0));  