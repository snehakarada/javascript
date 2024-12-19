// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] >= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

// -------------* testing section starts from here *---------------

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function getMessage(actual, expected, array1) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + actual + line + expected;
}

function testIsStrictlyAscending(array1, expected) {
  const actual = isStrictlyAscending(array1);

  console.log(getMessage(actual, expected, array1));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'actual |', 'expected');
  console.log('----------------------------------------------------');
}

function testAll() {
  heading();
  testIsStrictlyAscending([1, 2], true);
  testIsStrictlyAscending([1, 4, 3], false);
  testIsStrictlyAscending([1, 4, 3, 3], false);
  testIsStrictlyAscending([1, 2, 3, 3], false);
  testIsStrictlyAscending([5, 4, 3, 2], false);
  testIsStrictlyAscending([0, 4, 5, 6], true);
}

testAll();
