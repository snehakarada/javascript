// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let previous = 0;
let current = 1;
let count = n;
while (count > 1) {
    let next = previous + current;
    previous = current;
    current = next;
    count = count - 1;
}
console.log(previous);