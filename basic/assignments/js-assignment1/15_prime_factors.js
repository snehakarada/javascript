// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 91;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a;
let factor = 2;
while (number > 1) {
    if (number % factor === 0) {
        number = number / factor;
        console.log(factor);
        continue;
    }
    factor = factor + 1;
   
}