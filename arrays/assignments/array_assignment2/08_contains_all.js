// Return true if all elements are present in the array regardless of their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isElementThere(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isElementThere(array, elements[index])) {
      return false;
    }
  }

  return true;
}

// -------------* testing section starts from here *---------------

function getMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function getMessage(actual, expected, array1, array2) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + array2 + line + actual + line + expected;
}

function testContainsAll(array1, array2, expected) {
  const actual = containsAll(array1, array2);

  console.log(getMessage(actual, expected, array1, array2));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'arr2', 'actual |', 'expected');
  console.log('----------------------------------------------------');
}

function testAll() {
  heading();
  testContainsAll([1], [1], true);
  testContainsAll([1, 2, 3], [2, 1], true);
  testContainsAll([1, 2, 3], [2, 1, 4], false);
  testContainsAll([1, 4, 2], [2, 1, 4], true);
  testContainsAll([1, 0, 3], [0, 0], true);
}

testAll();
