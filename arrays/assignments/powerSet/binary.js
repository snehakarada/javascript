function binaryConversion(number, end) {
  let givenNumber = number;
  const binarySubSet = [];

  for (let i = 0; i < end; i++) {
    binarySubSet.unshift(givenNumber % 2);
    givenNumber = Math.floor(givenNumber / 2);
  }

  return binarySubSet;
}

function getBinaryarray(start, arr) {
  const binarySet = [];

  for (let i = start; i > 0; i--) {
    binarySet.push(binaryConversion(i, arr.length))
  }

  return binarySet;
}

function generatePowerSet(arr) {
  const noOfSubSets = 2 ** arr.length;
  const binaryArr = getBinaryarray(noOfSubSets - 1, arr);
  const sets = [[]];

  for (let i = 0; i < binaryArr.length; i++) {
    const subSet = [];
    for (let j = 0; j < binaryArr[i].length; j++) {
      const a = binaryArr[i];
      if (a[j] === 1) {
        subSet.push(arr[j]);
      }
    }
    sets.push(subSet);
  }
  
  return sets;
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

function checkingArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function getMark(actual, expected) {
  return checkingArraysEqual(actual, expected) ? '✅' : '❌';
}

function getMessage(actual, expected, array1) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  console.log(mark, array1, line, actual, line, expected);
}

function testPowerSet(array1, expected) {
  const actual = generatePowerSet(array1);
 
  getMessage(actual, expected, array1);
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'actual |', 'expected\n');
}

function testAll() {
  heading();
  testPowerSet([], [[]]);
  testPowerSet([1], [[], [1]]);
  testPowerSet([1, 2], [[], [1, 2], [1], [2]]);
  testPowerSet([1, 2, 3], [[], [1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2],
  [3]]);
  testPowerSet([1, 2, 3, 4], [[], [1, 2, 3, 4], [1, 2, 3], [1, 2, 4], [1, 2],
  [1, 3, 4], [1, 3], [1, 4], [1], [2, 3, 4], [2, 3], [2, 4], [2], [3, 4],
  [3], [4]]);
}

testAll();