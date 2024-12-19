
function countNumberOfDigits (number) {
  let givenNumber = number;
  let numberOfDigits = 0;

  while (givenNumber > 0) {
    const remainder = givenNumber % 10;
    numberOfDigits = numberOfDigits + 1
    givenNumber = (givenNumber - remainder) / 10;  
  }

  return numberOfDigits;
}

function productOfDigit(numberOfDigits, remainder) {
  let product = 1;
  while (numberOfDigits > 0) {
    product = product * remainder;
    numberOfDigits = numberOfDigits - 1;
  }

  return product;
}

function checkIsArmstrong (sum, number) {
  return sum === number ? true : false;
}

function isArmstrong(number) {
  let numberOfDigits = countNumberOfDigits(number);
  let givenNumber = number;
  let sum = 0;
  while (givenNumber > 0) {
    let product = 1;
    const remainder = givenNumber % 10;
    sum = sum + productOfDigit(numberOfDigits, remainder);
    givenNumber = (givenNumber - remainder) / 10;
  }
  return checkIsArmstrong(sum, number);
}

function getMessage(actualResult, expectedResult) {
  return actualResult === expectedResult ? '✅' : '❌';
}

function check(number, expectedResult) {
  const actualResult = isArmstrong(number);
  console.log(actualResult, expectedResult,
    getMessage(actualResult, expectedResult));
}

function heading(){
  console.log("|actualResult", "|expectedResult", "|right/wrong");
}

function testCases() {
  heading();
  check(153, true);
  check(1, true);
  check(0, true);
}

testCases();
