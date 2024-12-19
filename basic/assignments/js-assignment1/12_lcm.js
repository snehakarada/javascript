// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 36;
const b = 24;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let lcm = 1;
let number1 = a;
let number2 = b;
let factor = 2;
while (factor <= number1 || factor <= number2) {
  if (number1 % factor == 0 && number2 % factor == 0) {
    number1 = number1 / factor;
    number2 = number2 / factor;
    lcm = lcm * factor;
    continue;
  }
  factor = factor + 1;
}
lcm = lcm * number1 * number2;
console.log(lcm);
