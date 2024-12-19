// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

function reverse(array) {
  const reversedArray = [];

  for (let index = 0; index < array.length; index++) {
    reversedArray.unshift(array[index]);
  }

  return reversedArray;
}

// ------------------* testing section starts from here *----------------

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

function testReverse(array1, expected) {
  const actual = reverse(array1);

  console.log(getMessage(actual, expected, array1));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testReverse([1, 2], [2, 1]);
  testReverse([1, 0, 3, 4], [4, 3, 0, 1]);
  testReverse([], []);
  testReverse([5], [5]);
}

testAll();
