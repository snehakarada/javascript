function getHalfOfNumber(number) {
  return number / 2;
}

function getUpperCase(lowerCase) {
  return lowerCase.toUpperCase();
}

function isMoreThanFive(string) {
  return string.length > 5
}

function squareRoot(array) {
  return array.map(Math.sqrt);
}

function getHalfValues(array) {
  return array.map(getHalfOfNumber);
}

function convertLowerToUpprCase(array) {
  return array.map(getUpperCase);
}

function selectOddNumbers(array) {
  return array.filter(isOdd);
}

function getStrings(array) {
  return array.filter(isMoreThanFive);
}

function comparingStingsLength(string, element) {
  return element.length > string.length ? element : string;
}

function combiningStrings(string1, string2) {
  return string1.concat(string2);
}

function multiplyingTwoNumbers(number1, number2) {
  return number1 * number2;
}

function incrementingOddCount(count, number) {
  return isOdd(number) ? count + 1 : count;
}

function longestString(array) {
  return array.reduce(comparingStingsLength, '');
}

function concatingArray(array) {
  return array.reduce(combiningStrings, '');
}

function productOfAnArray(array) {
  return array.reduce(multiplyingTwoNumbers, 1);
}

function countOddNumbers(array) {
  return array.reduce(incrementingOddCount, 0);
}

//----------------------13-10-2024-------------------------------------


function isOdd(element) {
  return element % 2 === 1;
}

function checkGreater(number) {
  return number > 100;
}

function checkPositive(number) {
  return number > 0;
}

function checkStringLength(string) {
  return string.length <= 3
}

function atLeastOneOdd(array) {
  return array.some(isOdd);
}

function greaterThanHundred(array) {
  return array.some(checkGreater);
}

function isArrPositive(array) {
  return array.every(checkPositive);
}

function isStrLengthMoreThanThree(array) {
  return array.every(checkStringLength);
}

// --------- testing section starts from here --------------------

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function testPuzzle(array, expected, failed, functionName) {
  const actual = functionName(array);

  if (!areEqual(actual, expected)) {
    return failed.push([array, actual, expected]);
  }

}

function testAll() {
  const failed = [];
  testPuzzle([1, 4, 9], [1, 2, 3], failed, squareRoot);
  testPuzzle([100, 25, 16], [10, 5, 4], failed, squareRoot);
  testPuzzle([1, 4, 8, 5], [0.5, 2, 4, 2.5], failed, getHalfValues);
  testPuzzle([2.2, 9, 0], [1.1, 4.5, 0], failed, getHalfValues);
  testPuzzle(['hi', 'hello'], ['HI', 'HELLO'], failed, convertLowerToUpprCase);
  testPuzzle([1, 2, 3, 5, 8], [1, 3, 5], failed, selectOddNumbers);
  testPuzzle(['hi', 'hello0'], ['hello0'], failed, getStrings);
  testPuzzle(['hi', 'hello'], 'hello', failed, longestString);
  testPuzzle([1, 2, 9, 5], 3, failed, countOddNumbers);
  testPuzzle(['h', 'i'], 'hi', failed, concatingArray);
  testPuzzle([1, 2, 3], true, failed, atLeastOneOdd);
  testPuzzle([10, 2, 4], false, failed, atLeastOneOdd);
  testPuzzle([100, 99], false, failed, greaterThanHundred);
  testPuzzle([100, 101], true, failed, greaterThanHundred);
  console.table(failed);
}

testAll();