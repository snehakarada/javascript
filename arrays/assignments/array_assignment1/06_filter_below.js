// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters

function filterBelow(array, threshold) {
  const filterdArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filterdArray.push(array[index]);
    }
  }

  return filterdArray;
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

function testFilterBelow(array1, value, expected) {
  const actual = filterBelow(array1, value);

  console.log(getMessage(actual, expected, array1, value));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'value|', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testFilterBelow([1], 3, [1]);
  testFilterBelow([1, 0, -1, 9], 3, [1, 0, -1]);
  testFilterBelow([-1, 3, 9, 0], 0, [-1]);
}

testAll();
