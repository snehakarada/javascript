// Print all pairs of digits in `numberToCheck` which adds up to `target`.
const numberToCheck = 4141;
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
let number = numberToCheck;
while (number > 0) {
    let firstElementOfPair = number % 10;
    let remainingDigits = (number - firstElementOfPair) / 10;
    while (remainingDigits > 0){
        let secondElementOfPair = remainingDigits % 10;
        if (target === (firstElementOfPair + secondElementOfPair)){
            console.log(firstElementOfPair, secondElementOfPair);
        }
        remainingDigits = (remainingDigits - secondElementOfPair ) / 10;
    }
    number = (number - firstElementOfPair) / 10;
}