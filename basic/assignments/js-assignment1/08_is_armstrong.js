// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 153;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a;
let numberOfDigits = 0;
let sum = 0;
while (number > 0) {
  const remainder = number % 10;
  numberOfDigits = numberOfDigits + 1
  number = (number - remainder) / 10;
}
number = a;
while (number > 0) {
  let product = 1;
  let count = numberOfDigits;
  const remainder = number % 10;
  while (count > 0) {
    product = product * remainder;
    count = count - 1;
  }
  sum = sum + product;
  number = (number - remainder) / 10;
}
const isArmstrong = (a == sum);
console.log(isArmstrong);
