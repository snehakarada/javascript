/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return (isDivisible(year, 4) && !isDivisible(year, 100));
}

//--------------------- testing section starts from here -----------------

function getMark(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌';
}

function getMessage(year, actualResult, expectedResult) {
  const border = '   |';
  const mark = getMark(actualResult, expectedResult) + border;

  return mark + year + border + actualResult + border + expectedResult;
}

function testLeapYear(year, expectedResult) {
  const actualResult = isLeapYear(year);

  console.log(getMessage(year, actualResult, expectedResult));
}

function heading() {
  console.log("Year|", "actualResult |", "expectedResult |", "right/wrong |");
}

function testAll() {
  heading();
  testLeapYear(2006, false);
  testLeapYear(2020, true);
  testLeapYear(1, false);
  testLeapYear(100, false);
}

testAll();

