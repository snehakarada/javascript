const isEveryThingTrue = function (boolean) {
  return boolean === true;
}

const reducer = function (intial, element, index) {
  intial[index] = intial[index] === element;
  return intial;
}

const areEqual = function (array1, array2) {
  return array1.reduce(reducer, array2).every(isEveryThingTrue);
}

function checkingArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return array1
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}


console.log(checkingArraysEqual([[1, 2], [1]], [[1, 2], [1]]));
// console.log(areEqual([1, 2], [1, 2]));

