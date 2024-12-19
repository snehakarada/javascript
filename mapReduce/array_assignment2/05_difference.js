// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isElementThere(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const uniqueElementArr = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isElementThere(array2, array1[index])) {
      uniqueElementArr.push(array1[index]);
    }
  }

  return uniqueElementArr;
}

// -------------* testing section starts from here *---------------

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

function getMessage(actual, expected, array1, array2) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  return mark + array1 + line + array2 + line + actual + line + expected;
}

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);

  console.log(getMessage(actual, expected, array1, array2));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'arr2', 'actual |', 'expected');
  console.log('----------------------------------------------------');
}

function testAll() {
  heading();
  testDifference([1, 3], [0, 3], [1]);
  testDifference([1], [0, 3], [1]);
  testDifference([1, 0, 4], [0, 3], [1, 4]);
  testDifference([1, 2, 3], [1, 2, 3, 4], []);
}

testAll();
