// Given an array of numbers return a new array containing only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function isOdd(number) {
  return number % 2 === 1;
}

const selectOdds = function (numbers) {
  return numbers.filter(isOdd);
}

// -----------------* testing section starts from here *-------------

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

function getMark(actual, expected) {
  return areEqual(actual, expected) ? '✅' : '❌';
}

function getMessage(actual, expected, array1) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + actual + line + expected;
}

function testSelectOdds(array1, expected) {
  const actual = selectOdds(array1);

  console.log(getMessage(actual, expected, array1));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testSelectOdds([1, 2], [1]);
  testSelectOdds([1, 3, 4, 5], [1, 3, 5]);
  testSelectOdds([2, 4, 6], []);
  testSelectOdds([1, 9, 5], [1, 9, 5]);
}

testAll();
