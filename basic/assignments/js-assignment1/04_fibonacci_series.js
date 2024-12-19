// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 9;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let previous= 0;
let current = 1;
let count = n;
while(count >= 1){
    console.log(previous);
    const next = previous + current;
    previous = current;
    current = next;
    count = count - 1;
}

