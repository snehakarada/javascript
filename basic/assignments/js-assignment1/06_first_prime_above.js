// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 2;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let firstPrime = a;
let factor = 1;
let numberOfFactors = 0;
while (true) {
    firstPrime = firstPrime + 1
    for (factor = 1; factor <= firstPrime; factor++) {
        if (firstPrime % factor == 0) {
            numberOfFactors = numberOfFactors + 1;
        }
    }
    if (numberOfFactors == 2) {
        console.log(firstPrime);
        break;
    }
    numberOfFactors = 0;
}