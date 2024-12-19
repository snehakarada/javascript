const number = 1;
const stringNumber = '' + number;
const numberOfDigits = stringNumber.length;
let armstrongCandidate = stringNumber;
let sum = 0;

while (armstrongCandidate > 0) {
    const remainder = armstrongCandidate % 10;
    let productOfDigit = 1;
    for (let count = numberOfDigits; count > 0; count--) {
        productOfDigit = productOfDigit * remainder;
    }
    sum = sum + productOfDigit;
    armstrongCandidate = (armstrongCandidate - remainder) / 10;
}

const isArmstrong = sum === number;
console.log(isArmstrong);

