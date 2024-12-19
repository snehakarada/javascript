const a = 101;
let number = a;
let sum = 0;
let isNivenNumber = false;
while (number > 0) {
    let rightMostDigit = number % 10;
    sum = sum + rightMostDigit;
    number = (number - rightMostDigit) / 10;
}
if (a % sum == 0) {
    isNivenNumber = true;
}
console.log(isNivenNumber);
