// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 100;
const r = 5;
const t = 1;
// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let compoundIntrest = 0;
let principle = p;
for (let year = 1; year <= t; year++) {
  let interest = (principle * r) / 100;
  principle = principle + interest;
}
compoundIntrest = principle - p;
console.log(compoundIntrest);

