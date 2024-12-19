// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

function pushingElements(fromArr, toArr) {
  for (let index = 0; index < fromArr.length; index++) {
    toArr.push(fromArr[index]);
  }

  return toArr;
}

function concat(array1, array2) {
  let concatedArray = [];

  concatedArray = pushingElements(array1, concatedArray);
  concatedArray = pushingElements(array2, concatedArray);

  return concatedArray;
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

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);

  console.log(getMessage(actual, expected, array1, array2));
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'arr2', 'actual |', 'expected');
  console.log('----------------------------------------------------');
}

function testAll() {
  heading();
  testConcat([1], [0], [1, 0]);
  testConcat([1, 5], [0], [1, 5, 0]);
  testConcat([], [], []);
  testConcat([1, 2, 3], [0, 4], [1, 2, 3, 0, 4]);
  testConcat([1, 2, 3], [0, 4, 100], [1, 2, 3, 0, 4, 100]);
}

testAll();
