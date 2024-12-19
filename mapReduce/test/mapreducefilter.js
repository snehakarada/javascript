// ["abc","def","ghi"] => "cfi"
// You are given an array of strings. Write a function to return a single string that is the concatenation of the last character of every string in the array.
const concatingLastChars = function (accumulator, element) {
  return accumulator + element.at(-1);
}

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(concatingLastChars, '');
}

// [[1,-2],[3,4],[5,-6]] => [[1, -2], [3,4], [5, -6]]
// Write a function to return a new array containing only those lists that contain at least one positive number.

const isPositive = function (element) {
  return element > 0;
}

const atLeastOnePositive = function (element) {
  return element.some(isPositive);
}

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(atLeastOnePositive);
}

// [0,-1,-2,3,4] => 12
// Write a function to calculate the product of all the positive numbers in the array. 0 is not positive.

const product = function (number1, number2) {
  return number1 * number2;
}

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(product, 1);
}

// ["educate", "there", "animation"] => "educate"
// Write a function to return the longest string that contains the letter "e".

const isStrContainsE = function (element) {
  return element.includes('e');
}

const longestString = function (accumulator, element) {
  return accumulator.length >= element.length ? accumulator : element;
}

const longestEWord = function (strings) {
  return strings.filter(isStrContainsE).reduce(longestString, '');
}

// [[2, 4, 6], [1, 3, 5], [8, 10]] => false
// [[2,4],[6,8]] => true
// Write a function to check if all lists contain only even numbers. Return `true` if they do, and `false` otherwise.
const isEven = function (element) {
  return element % 2 === 0;
}

const checkAllEvens = function (accumulator, element) {
  if (!element.every(isEven)) {
    return false;
  }

  return accumulator;
}

const areAllListsEven = function (listOfLists) {
  return listOfLists.reduce(checkAllEvens, true);
}

// [1,2,3,4] => 10 (sqr(1) + sqr(3))
// Write a function to calculate the sum of the squares of all the odd numbers in the array
const isOdd = function (number) {
  return number % 2 === 1;
}

const squareOfANumber = function (number) {
  return number * number;
}

const add = function (number1, number2) {
  return number1 + number2;
}

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.filter(isOdd).map(squareOfANumber).reduce(add, 0);
}

// ["abc","def"] => true
// ["abc","de"] => false
// Write a function to check if all strings have the same length. Return `true` if they do, and `false` otherwise. 
const sameLength = function ([boolean, index], element) {
  if (index === -1) {
    index = element.length;
  }

  boolean = element.length === index;
  return [boolean, index];
}

const areAllOfSameLength = function (listOfStrings) {
  const array = listOfStrings.reduce(sameLength, [true, -1]);
  return array[0];
}

// [1,2,3,4,1,2] => [1,2,3,4]
// Write a function to return a new array with all duplicate values removed.  
const getUniqueElements = function (accumulator, element) {
  if (!accumulator.includes(element)) {
    accumulator.push(element);
  }

  return accumulator;
}

const removeDuplicates = function (numbers) {
  return numbers.reduce(getUniqueElements, []);
}

// ["ant", "eye", "id"] => true
// ["ant","bat"] => false
// Write a function to check if all the strings in the array start with a vowel. Return `true` if they do, and `false` otherwise.  
const isVowel = function (char) {
  return "aeiou".includes(char);
}

const isStartsWithVowel = function (accumulator, element) {
  return isVowel(element[0]);
}

const allStartWithAVowel = function (words) {
  return words.reduce(isStartsWithVowel, false);
}

// [1,2,3,4] => [1,3,6,10]
// [1,1,4,5] => [1,2,6,11]
// Build an array where each element is the running sum of the elements up to that index.
const sumUptoIndex = function (accumulator, element) {
  if (accumulator.length === 0) {
    accumulator.push(element);
    return accumulator;
  }

  accumulator.push(accumulator.at(-1) + element);
  return accumulator;
}

const runningTotal = function (numbers) {
  return numbers.reduce(sumUptoIndex, []);
}

// [] => [[]]
// [1] => [[1]]
// [1,2] => [[1,2]]
// [1,2,3] => [[1,2],[3]]
// [1,2,3,4] => [[1,2],[3,4]]
// Write a function to pair up elements of a list. 
const pairTheElements = function (accumulator, element) {
  if (accumulator.at(-1).length < 2) {
    accumulator.at(-1).push(element);
    return accumulator;
  }

  accumulator.push([element]);
  return accumulator;
}

const pairs = function (list) {
  return list.reduce(pairTheElements, [[]]);
}

//-----------------testing section starts from here------------------

const areArraysEqual = function (array2, element, index) {
  array2[index] = areEqual(array2[index], element);
  return array2;
}

const isEveryThingTrue = function (boolean) {
  return boolean === true;
}

const doubleDimension = function (array1, array2) {
  return array1.reduce(areArraysEqual, [...array2]).every(isEveryThingTrue);
}

const reducer = function (intial, element, index) {
  intial[index] = intial[index] === element;
  return intial;
}

const areEqual = function (array1, array2) {
  return array1.reduce(reducer, [...array2]).every(isEveryThingTrue);
}

const isStrEqual = function (str1, str2) {
  return str1 === str2;
}

function testProgram(array, expected, failed, functionName, condition) {
  const actual = functionName(array);
  if (!condition(actual, expected)) {
    return failed.push([array, actual, expected]);
  }

}

const testLastChars = function (failed) {
  testProgram(['doc', 'da', 'it'], 'cat', failed, allLastChars, isStrEqual);
  testProgram(['doc', 'au', 'it'], 'cut', failed, allLastChars, isStrEqual);
}

const testListWithPositiveNumbers = function (failed) {
  testProgram([[1, 2], [-2, -3], [4, -6]], [[1, 2], [4, -6]], failed, listsWithPositiveNumbers, doubleDimension);
  testProgram([[1, 2], [-2, -3]], [[1, 2]], failed, listsWithPositiveNumbers, doubleDimension);
  testProgram([[-1, -2], [-2, -3]], [], failed, listsWithPositiveNumbers, doubleDimension);
}

const testProductOfPositives = function (failed) {
  testProgram([1, 2, 3, 0], 6, failed, productOfPositives, isStrEqual);
  testProgram([-1, 2, -2, 0, 3], 6, failed, productOfPositives, isStrEqual);
  testProgram([-1, -2, -2, 0, -3], 1, failed, productOfPositives, isStrEqual);
  testProgram([], 1, failed, productOfPositives, isStrEqual);
  testProgram([0], 1, failed, productOfPositives, isStrEqual);
  testProgram([2], 2, failed, productOfPositives, isStrEqual);
}

const testLongestEWord = function (failed) {
  testProgram(['english', 'eat', 'die', 'ant'], 'english', failed, longestEWord, isStrEqual);
  testProgram(['english', 'eat', 'educate'], 'english', failed, longestEWord, isStrEqual);
  testProgram(['e', 'at', 'book'], 'e', failed, longestEWord, isStrEqual);
  testProgram(['a', 'at', 'book'], '', failed, longestEWord, isStrEqual);
  testProgram([], '', failed, longestEWord, isStrEqual);
}

const testAllListsAreEven = function (failed) {
  testProgram([[1, 2], [2, 4]], false, failed, areAllListsEven, isStrEqual);
  testProgram([[8, 2], [2, 4]], true, failed, areAllListsEven, isStrEqual);
  testProgram([], true, failed, areAllListsEven, isStrEqual);
  testProgram([[1]], false, failed, areAllListsEven, isStrEqual);
  testProgram([[0]], true, failed, areAllListsEven, isStrEqual);
}

const testSumOfOddSquares = function (failed) {
  testProgram([1, 2, 3, 4], 10, failed, sumOfSquaresOfOdds, isStrEqual);
  testProgram([1, 2, 3, 4, 5], 35, failed, sumOfSquaresOfOdds, isStrEqual);
  testProgram([1], 1, failed, sumOfSquaresOfOdds, isStrEqual);
  testProgram([5, 6], 25, failed, sumOfSquaresOfOdds, isStrEqual);
}

const testSameLength = function (failed) {
  testProgram(['abc', 'def'], true, failed, areAllOfSameLength, isStrEqual);
  testProgram(['abc', 'deff'], false, failed, areAllOfSameLength, isStrEqual);
  testProgram(['abc'], true, failed, areAllOfSameLength, isStrEqual);
  testProgram([], true, failed, areAllOfSameLength, isStrEqual);
}

const testRemoveDuplicates = function (failed) {
  testProgram([1, 2, 3, 3], [1, 2, 3], failed, removeDuplicates, areEqual);
  testProgram([1, 2, 2, 4, 1], [1, 2, 4], failed, removeDuplicates, areEqual);
}

const testAllstartsWithVowel = function (failed) {
  testProgram(['ant', 'ice'], true, failed, allStartWithAVowel, isStrEqual);
  testProgram(['ant', 'rat'], false, failed, allStartWithAVowel, isStrEqual);
}

const testRunningTotal = function (failed) {
  testProgram([1, 2, 3, 4], [1, 3, 6, 10], failed, runningTotal, areEqual);
  testProgram([1, 2, 3, 4, 5], [1, 3, 6, 10, 15], failed, runningTotal, areEqual);
}

const testPairs = function (failed) {
  testProgram([1, 2, 3, 4], [[1, 2], [3, 4]], failed, pairs, doubleDimension);
  testProgram([1, 2, 3], [[1, 2], [3]], failed, pairs, doubleDimension);
}

function testAll() {
  const failed = [];
  testLastChars(failed);
  testListWithPositiveNumbers(failed);
  testProductOfPositives(failed);
  testLongestEWord(failed);
  testAllListsAreEven(failed);
  testSumOfOddSquares(failed);
  testSameLength(failed);
  testRemoveDuplicates(failed);
  testAllstartsWithVowel(failed);
  testRunningTotal(failed);
  testPairs(failed);
  console.table(failed);
}

testAll();



