// Print all pairs of digits in `numberToCheck` which adds up to `target`.
const numberToCheck = 1414;
const target = 4;
// For example `numberToCheck` = 1234 and `target` = 5
// Pairs whose sum is 5 are (1, 4) and (2, 3) 
// Your program should print
// 1 4
// 2 3
// or
// 4 1
// 3 2
// As you can see above, order doesn't matter. You can print in any order.
// One line should contain only one pair.
// There should be exactly one space between numbers of a pair.
// You should use console.log(1, 4) to print 1 and 4 on a single line with exactly one space between them.
// If there is no pair that adds up to the target, your program should not print anything.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let rightMostDigit = 0;
let lastNumber = numberToCheck;
while (lastNumber > 9){
    let intial = 2;
    let number = lastNumber; 
    let numberOfPairs = 0;  
    let sum = 0;    
    while (number > 9) {
        if (numberOfPairs < intial) { 
            rightMostDigit = number % 10;
            sum = sum + rightMostDigit;
            number = (number - rightMostDigit) / 10;
            numberOfPairs = numberOfPairs + 1;
            continue;
        }
        if (sum === target) {
            console.log(sum-rightMostDigit, rightMostDigit);
        }
        sum = sum - rightMostDigit;
        numberOfPairs = 0;
        intial = 1;
    }
    if (sum === target) {
        console.log(sum-rightMostDigit, rightMostDigit);
    }
    let remainder = lastNumber % 10;
    lastNumber = (lastNumber - remainder) / 10;
}