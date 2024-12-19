function getColumn(matrixB, index) {
  const columnArr = [];

  for (let i = 0; i < matrixB.length; i++) {
    const column = matrixB[i];
    columnArr.push(column[index]);
  }

  return columnArr;
}

function getNumberOfColumn(matrixB) {
  return matrixB[0].length;
}

function checkCompatibility(array1, array2) {
  return array1.length === array2.length;
}

function multiplication(row, column) {
  let sum = 0;

  for (let index = 0; index < row.length; index++) {
    sum += row[index] * column[index];
  }

  return sum;
}

function multiplyColumns(row, matrixB) {
  const end = getNumberOfColumn(matrixB);
  const subArr = [];

  for (let j = 0; j < end; j++) {
    const column = getColumn(matrixB, j);

    if (!checkCompatibility(row, column)) {
      return NaN;
    }

    subArr.push(multiplication(row, column));
  }

  return subArr;
}

function multiplyMatrices(matrixA, matrixB) {
  const resultantArr = [];

  for(const row of matrixA) {
    const element = multiplyColumns(row, matrixB);

    if (element + '' === 'NaN') {
      return NaN;
    }
  
    resultantArr.push(element);
  }

  return resultantArr;
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

function getMessage(actual, expected, array1, array2) {
  const line = '   |';
  const mark = getMark(actual, expected) + line;

  console.log(mark, array1, line, array2, line, actual, line, expected);
}

function testMultiplyMatrices(array1, array2, expected) {
  const actual = multiplyMatrices(array1, array2);

  getMessage(actual, expected, array1, array2);
}

function heading() {
  console.log('right/wrong |', 'arr1 |', 'arr2|', 'actual |', 'expected\n');
}

function testCases() {
  testMultiplyMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]], [[19, 22], [43,
    50]]); // 2*2 2*2
  testMultiplyMatrices([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]],
    [[58, 64], [139, 154]]);  // 2*3 3*2
  testMultiplyMatrices([[5, 7], [8, 9], [10, 11]], [[1, 1], [1, 1]],
    [[12, 12], [17, 17], [21, 21]]);  // 3*2 2*2
  testMultiplyMatrices([[5, 6], [7, 8]], [[1, 0], [0, 1]], [[5, 6], [7, 8]]);
  testMultiplyMatrices([[1, 2, 3]], [[1], [2], [3]], [[14]]);
  testMultiplyMatrices([[1, 0], [-1, 2], [3, 4]], [[1, -2, 3], [4, 5, 7]],
    [[1, -2, 3], [7, 12, 11], [19, 14, 37]]);
  testMultiplyMatrices([[1], [2], [3]], [[1, 2, 3]], [[1, 2, 3], [2, 4, 6],
  [3, 6, 9]]);
}

function testEdgeCases() {
  testMultiplyMatrices([[1, 2], [4]], [[4], [1, 2]], NaN);
  testMultiplyMatrices([[1, 2], [1, 2]], [[1, 2], [1, 2], [1, 2]], NaN);
  testMultiplyMatrices([[]], [[1]], NaN);
  testMultiplyMatrices([], [], []);
  testMultiplyMatrices([[]], [[]], [[]]);
}

function testAll() {
  heading();
  testCases();
  testEdgeCases();
}

testAll();
