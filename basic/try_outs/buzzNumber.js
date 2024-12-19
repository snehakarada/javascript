const a = 48;
let isBuzzNumber = false;
let rightMostDigit = a % 10;
if (a % 7 == 0 || rightMostDigit == 7) {
    isBuzzNumber = true;
}
console.log(isBuzzNumber);