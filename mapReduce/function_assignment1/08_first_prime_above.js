/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isPrime(primeCandidate) {
  for (let factors = 2; factors < primeCandidate; factors++) {
    if (primeCandidate % factors === 0) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  if (primeCandidate < 2) {
    return false;
  }

  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate = primeCandidate + 1;
  }

  return primeCandidate;
}

//--------------------- testing section starts from here -----------------

function getMark(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌'
}

function getMessage(number, actualResult, expectedResult) {
  const border = '   |';
  const mark = getMark(actualResult, expectedResult) + border;

  return mark + number + border + actualResult + border + expectedResult;
}

function testFirstPrimeAbove(number, expectedResult) {
  const actualResult = firstPrimeAbove(number);

  console.log(getMessage(number, actualResult, expectedResult));
}

function heading() {
  console.log('right/wrong|', 'number|', 'actualresult|', 'expectedResult|');
}

function testAll() {
  heading();
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(15, 17);
  testFirstPrimeAbove(17, 19);
}

testAll();