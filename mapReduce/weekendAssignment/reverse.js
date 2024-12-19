const getReversedArr = function (intial, element) {
  intial.unshift(element);
  return intial;
}

const reversingArr = function (array) {
  return array.reduce(getReversedArr, []);
}

const reversingStr = function (string) {
  const array = string.split('');
  return array.reduce(getReversedArr, []).join('');
}

const highestNumber = function (intial, element) {
  if (element >= intial) {
    return element;
  }

  return intial;
}

const secondHighestNumber = function (array) {
  const firstHighest = array.reduce(highestNumber, 0);
  const givenArr = array.with(array.indexOf(firstHighest), 0);
  return givenArr.reduce(highestNumber, 0);
}

const fibo = function (intial, element, index, array) {
  array[index + 1] = element + intial;
  intial = element;
  return intial;
}

const nthfibonaci = function (number) {
  const arr = Array(number).fill(0);
  return arr.reduce(fibo, 1);
}

// ---------------testing section starts from here--------------

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

const isStrEqual = function (str1, str2) {
  return str1 === str2;
}

function generic(array, actual, expected, failed, functionName) {
  if (!functionName(actual, expected)) {
    return failed.push([array, actual, expected]);
  }

}

const testingArrays = function (array, expected, failed, functionName) {
  const actual = functionName(array);
  return generic(array, actual, expected, failed, areEqual);
}

const testProgram = function (string, expected, failed, functionName) {
  const actual = functionName(string);
  return generic(string, actual, expected, failed, isStrEqual);
}

const testReversingArr = function (failed) {
  testingArrays([1, 2, 3], [3, 2, 1], failed, reversingArr);
  testingArrays([0, 7, 'hello'], ['hello', 7, 0], failed, reversingArr);
  testingArrays(['0'], ['0'], failed, reversingArr);
}

const testReversingStr = function (failed) {
  testProgram('hi', 'ih', failed, reversingStr);
  testProgram('malayalam', 'malayalam', failed, reversingStr);
}

const testSecondHighest = function (failed) {
  testProgram([1, 2, 3], 2, failed, secondHighestNumber);
  testProgram([10, 2, 3], 3, failed, secondHighestNumber);
}

const testNthFibonacci = function (failed) {
  testProgram(1, 0, failed, nthfibonaci);
  testProgram(2, 1, failed, nthfibonaci);
  testProgram(3, 1, failed, nthfibonaci);
  testProgram(4, 2, failed, nthfibonaci);
  testProgram(5, 3, failed, nthfibonaci);
  testProgram(6, 5, failed, nthfibonaci);
}

function testAll() {
  const failed = [];
  testReversingArr(failed);
  testReversingStr(failed);
  testSecondHighest(failed);
  testNthFibonacci(failed);
  console.table(failed);
}

testAll();



