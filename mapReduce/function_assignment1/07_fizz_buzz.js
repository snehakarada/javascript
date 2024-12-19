/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(number) {
  if (isDivisible(number, 15)) {
    return 'fizzbuzz';
  }

  if (isDivisible(number, 3)) {
    return 'fizz';
  }

  if (isDivisible(number, 5)) {
    return 'buzz';
  }

  return '' + number;
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

function testFizzBuzz(number, expectedResult) {
  const actualResult = fizzBuzz(number);

  console.log(getMessage(number, actualResult, expectedResult));
}

function heading() {
  console.log('right/wrong|', 'number|', 'actualResult|', 'expectedResult|');
}

function testAll() {
  heading();
  testFizzBuzz(3, 'fizz');
  testFizzBuzz(5, 'buzz');
  testFizzBuzz(15, 'fizzbuzz');
  testFizzBuzz(25, 'buzz');
  testFizzBuzz(37, '37');
  testFizzBuzz(2, '2')
}

testAll();
