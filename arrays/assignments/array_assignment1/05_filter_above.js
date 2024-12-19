// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
// do not modify input parameters

function filterAbove(array, threshold) {
  const filteredArr = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filteredArr.push(array[index]);
    }
  }

  return filteredArr;
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

function getMessage(actual, expected, array1, value) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + value + line + actual + line + expected;
}

function testFilterAbove(array1, value, expected) {
  const actual = filterAbove(array1, value);

  console.log(getMessage(actual, expected, array1, value));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'value', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testFilterAbove([1], 0, [1]);
  testFilterAbove([1, 4, 6], 3, [4, 6]);
  testFilterAbove([1, 4, 6, 9], 9, []);
  testFilterAbove([1, 0, 2], -1, [1, 0, 2]);
}

testAll();
