const singleDigitsStr = ['one ', 'two ', 'three ', 'four ', 'five ', 'six ',
  'seven ', 'eight ', 'nine ',];

const singleDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubleDigitsStr = ['eleven ', 'twelve ', 'thirteen ', 'fourteen ',
  'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];

const doubleDigits = [11, 12, 13, 14, 15, 16, 17, 18, 19];

const tensStr = ['ten ', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ',
  'seventy ', 'eighty ', 'ninety '];

const standard = ['thousand ', 'million ', 'billion '];

function convertNumberToArray(num) {
  let givenNumber = num;
  const array = [];

  while (givenNumber > 0) {
    array.unshift(givenNumber % 10);
    givenNumber = Math.floor(givenNumber / 10);
  }

  return array;
}

function getPreviousNElementsFrom(array, startIndex, n) {
  const chunk = [];

  for (let index = startIndex; index >= 0 && chunk.length < n; index--) {
    chunk.unshift(array[index]);
  }

  return chunk;
}

function getPartitions(array, n) {
  const slicedArr = [];

  for (let index = array.length - 1; index >= 0; index -= n) {
    slicedArr.unshift(getPreviousNElementsFrom(array, index, n));
  }

  return slicedArr;
}

function extractNumberFromArr(array) {
  let num = '';

  for (let i = 0; i < array.length; i++) {
    num += array[i];
  }

  return +num;
}

function convertingNumToStr(number, digitsArr, stringArr) {
  for (let index = 0; index < digitsArr.length; index++) {
    if (extractNumberFromArr(number) === digitsArr[index]) {
      return stringArr[index];
    }
  }

  return '';
}

function checkDoubleDigits(array) {
  let str = '';

  if (array[array.length - 2] === 1) {
    str += convertingNumToStr(array.slice(-2), doubleDigits, doubleDigitsStr);
  }

  if (str === '') {
    str += convertingNumToStr(array.slice(-2, -1), singleDigits, tensStr);
    str += convertingNumToStr(array.slice(-1), singleDigits, singleDigitsStr);
  }

  return str;
}

function isValidNumber(number, noOfPartitions) {
  if (extractNumberFromArr(number) > 0) {
    return standard[noOfPartitions];
  }

  return '';
}

function givingStandards(partition, value, string) {
  let str = string;
  str = checkDoubleDigits(partition) + value + str;

  if (partition.length === 3 && partition[0] !== 0) {
    const place = convertingNumToStr(partition.slice(-3, -2), singleDigits, singleDigitsStr);
    str = place + 'hundred ' + str;
  }

  return str;
}

function numberToWords(num) {
  if (num === 0) {
    return 'zero';
  }

  let string = '';
  const array = getPartitions(convertNumberToArray(num), 3);
  let value = '';
  let noOfPartitions = -1;
  let remainingParts = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    const partition = array[i];
    if (noOfPartitions === remainingParts) {
      value = isValidNumber(partition, noOfPartitions);
      remainingParts++;
    }
    string = givingStandards(partition, value, string);
    noOfPartitions++;
  }

  return string.trim();
}

{
  // -----------------* testing section starts from here *---------------

  function getMark(actual, expected) {
    return actual === expected ? '✅' : '❌';
  }

  function getMessage(actual, expected, number) {
    const line = '   |';
    const mark = getMark(actual, expected) + line;

    return mark + number + line + actual + line + expected;
  }

  function testNumberToWords(number, expected) {
    const actual = numberToWords(number);

    console.log(getMessage(actual, expected, number));
  }

  function heading() {
    console.log('right/wrong |', 'number |', 'actual |', 'expected');
    console.log('----------------------------------------------------');
  }

  function testSingleDigits() {
    testNumberToWords(0, 'zero');
    testNumberToWords(1, 'one');
    testNumberToWords(9, 'nine');
  }

  function testTwoDigits() {
    testNumberToWords(11, 'eleven');
    testNumberToWords(12, 'twelve');
    testNumberToWords(19, 'nineteen');
    testNumberToWords(18, 'eighteen');
  }

  function testTens() {
    testNumberToWords(10, 'ten');
    testNumberToWords(20, 'twenty');
    testNumberToWords(30, 'thirty');
    testNumberToWords(40, 'forty');
    testNumberToWords(50, 'fifty');
    testNumberToWords(60, 'sixty');
    testNumberToWords(70, 'seventy');
    testNumberToWords(80, 'eighty');
    testNumberToWords(90, 'ninety');
  }

  function testStandards() {
    testNumberToWords(100, 'one hundred');
    testNumberToWords(1000, 'one thousand');
    testNumberToWords(10000, 'ten thousand');
    testNumberToWords(100000, 'one hundred thousand');
    testNumberToWords(1000000, 'one million');
    testNumberToWords(100000000000, 'one hundred billion');
  }

  function testRandonNumbers() {
    testNumberToWords(199, 'one hundred ninety nine');
    testNumberToWords(44, 'forty four');
    testNumberToWords(999999999999, 'nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
    testNumberToWords(23456, "twenty three thousand four hundred fifty six");
    testNumberToWords(100001, "one hundred thousand one");
    testNumberToWords(100000000001, "one hundred billion one");
  }

  function testAll() {
    heading();
    testSingleDigits();
    testTwoDigits();
    testTens();
    testStandards();
    testRandonNumbers();
  }

  testAll();
}