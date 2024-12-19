// Do not rename a, d or n, use them as input for your program.
// While testing we will change their values.
const a = 2;
const d = 1;
const n = 8;
// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let sumOfNTerms = 0;
let numberOfTerms = 1;
let nextTerm = 0;
while (numberOfTerms <= n) {
  sumOfNTerms = sumOfNTerms + (a + nextTerm);
  nextTerm = nextTerm + d;
  numberOfTerms = numberOfTerms + 1;
}
console.log(sumOfNTerms);