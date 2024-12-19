// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters

const isEveryThingTrue = function (boolean) {
  return boolean;
}

const reducer = function (intial, element, index) {
  if (intial[index] !== element) {
    intial[index] = false;
    return intial;
  }

  intial[index] = true;
  return intial;
}

const areEqual = function (array1, array2) {
  return array1.reduce(reducer, [...array2]).every(isEveryThingTrue);
}

// ------------------* testing section starts from here *----------------

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function getMessage(actual, expected, array1, array2) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + array2 + line + actual + line + expected;
}

function testAreEqual(array1, array2, expected) {
  const actual = areEqual(array1, array2);

  console.log(getMessage(actual, expected, array1, array2));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'arr2 |', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testAreEqual([1], [1], true);
  testAreEqual([1, 2], [1, 2, 3], false);
  testAreEqual([], [], true);
  testAreEqual([1, 2, 3], [1, 3, 2], false);
  testAreEqual([0, 2, 5], [4, 2, 5], false);
  testAreEqual([0, 2, 5], [0, 2, 5, 1], false);
}

testAll();
