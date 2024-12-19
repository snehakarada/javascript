// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

function isStrictlyDescending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] <= numbers[index + 1]) {
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

function testIsStrictlyDescending(array1, expected) {
  const actual = isStrictlyDescending(array1);

  console.log(getMessage(actual, expected, array1));
}

function heading() {
  console.log('right/wrong |', 'arr |', 'actual |', 'expected');
  console.log('----------------------------------------------------');
}

function testAll() {
  heading();
  testIsStrictlyDescending([2, 1], true);
  testIsStrictlyDescending([1, 2], false);
  testIsStrictlyDescending([2, 2, 1], false);
  testIsStrictlyDescending([5, 4, 4, 1], false);
  testIsStrictlyDescending([10, 3, 0], true);
}

testAll();
