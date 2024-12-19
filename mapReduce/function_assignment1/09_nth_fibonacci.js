/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(n) {
  let currentTerm = 0;
  let nextTerm = 1;

  for (let count = n; count > 1; count--) {
    const sumOfLastTwoTerms = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sumOfLastTwoTerms;
  }

  return currentTerm;
}

//--------------------- testing section starts from here -----------------

function getMark(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌';
}

function getMessage(number, actualResult, expectedResult) {
  const border = '   |';
  const mark = getMark(actualResult, expectedResult) + border;

  return mark + number + border + actualResult + border + expectedResult;
}

function testNthFibanacciTerm(number, expectedResult) {
  const actualResult = nthFibonacciTerm(number);

  console.log(getMessage(number, actualResult, expectedResult));
}

function heading() {
  console.log('right/wrong|', 'number|', 'actualresult|', 'expectedResult|');
}

function testAll() {
  heading();
  testNthFibanacciTerm(1, 0);
  testNthFibanacciTerm(2, 1);
  testNthFibanacciTerm(3, 1);
  testNthFibanacciTerm(5, 3);
}

testAll();