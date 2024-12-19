/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function convertFromCelsius(value, to) {
  if (to === 'F') {
    return (9 / 5) * value + 32;
  }

  if (to === 'K') {
    return +value + 273.15;
  }

  return value;
}

function convertIntoCelsius(from, value) {
  if (from === 'K') {
    return value - 273.15;
  }

  if (from === 'F') {
    return (value - 32) * (5 / 9);
  }

  return value;
}

function isValidUnits(from, to) {
  if (from !== 'K' && from !== 'C' && from !== 'F') {
    return false;
  }

  if (to !== 'K' && to !== 'C' && to !== "F") {
    return false;
  }

  return true;
}

function convert(from, to, value) {
  if (!(isValidUnits(from, to))) {
    return NaN;
  }

  if (value === true || value === false) {
    return NaN;
  }
  
  if (from === to) {
    return +value;
  }

  const celsiusValue = convertIntoCelsius(from, value);

  return convertFromCelsius(celsiusValue, to);
}



//--------------------- testing section starts from here -----------------

function getMark(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌';
}

function getMessage(actualResult, expectedResult) {
  const border = '   |';
  const mark = getMark(actualResult, expectedResult) + border;

  return mark + actualResult + border + expectedResult;
}

function testConvert(from, to, value, expectedResult) {
  const actualResult = convert(from, to, value);

  console.log(getMessage(actualResult, expectedResult));
}

function heading() {
  console.log("right/wrong|", "actualResult|", "expectedResult|");
}

function testConvertCtoFandK() {
  heading();
  testConvert('C', 'F', 37, 98.6);
  testConvert('C', 'K', 0, 273.15);
  testConvert('C', 'C', 37, 37);
}

function testConvertFtoCandK() {
  testConvert('F', 'C', -40, -40);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('F', 'F', 98.6, 98.6);
}

function testConvertKtoFandC() {
  testConvert('K', 'C', 100, -173.15);
  testConvert('K', 'F', 100, -279.67);
  testConvert('K', 'K', 32, 32);
}

function testEdgeCases() {
  testConvert('k', 'K', 32, NaN);
  testConvert('K', 'k', 32, NaN);
  testConvert('h', 'j', '87', NaN);
  testConvert('F', 'C', '-40', -40);
  testConvert('F', 'C', 'abcd', NaN);
  testConvert('C', 'K', "ab", NaN);
  testConvert('K', 'F', 'ab', NaN);
  testConvert('C', 'F', 'ab', NaN);
  testConvert('C', 'C', 'abc', NaN);
  testConvert('F', 'C', true, NaN);
}

function testAll() {
  testConvertCtoFandK();
  testConvertFtoCandK();
  testConvertKtoFandC();
  testEdgeCases()
}

testAll();





































