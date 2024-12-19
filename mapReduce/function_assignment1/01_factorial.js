/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
const rengeArr = function (start, stop, step) {
  const array = [];

  for (let i = start; i <= stop; i += step) {
    array.push(i);
  }

  return array;
}

const multiplication = function (number1, number2) {
  return number1 * number2;
}

function factorial(number) {
  const fact = rengeArr(1, number, 1);
  return fact.reduce(multiplication, 1);
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

function testFactorial(number, expectedResult) {
  const actualResult = factorial(number);

  console.log(getMessage(number, actualResult, expectedResult));
}

function heading() {
  console.log('right/wrong|', 'number|', "actualResult|", "expectedresult|");
}

function testAll() {
  heading();
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(5, 120);
}

testAll();