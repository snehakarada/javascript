// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 121000001212;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a;
let reverse = 0;
while(number > 0){
    const remainder = number % 10;
    reverse = (reverse * 10) + remainder;
    number = (number - remainder) / 10;
}
const isPalindrome = (a == reverse)
console.log(isPalindrome);

