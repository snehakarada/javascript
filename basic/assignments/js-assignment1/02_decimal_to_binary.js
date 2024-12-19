// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 4;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a; 
while (number > 1) {
    let bit = number % 2;
    number = (number - bit) / 2;
    console.log(bit);
}
console.log(number);