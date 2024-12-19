



/*
// function call in parameter list ---> it is working
function incrementByOne (number = takeInput ()) {
    return ++number;
}
function takeInput () {
    let digit = 9;
    return digit;
}
const result = incrementByOne();
console.log(result);
*/

/*
// function call inside another function 
function compareAndIncrement (number1,number2) {
	let number = compare(number1,number2);
	number = number + 1;
	return number;
}
function compare (num1,num2) {
	return num1 < num2 ? num1 : num2;
}
const result = compareAndIncrement(9,20);
console.log(result);
*/

/*
// we can update the valriable inside function that declared outside
     beacause that decalred outside has global scope
let zero = 0;   
let incrementedValue = incrementByOne(8);
console.log(incrementedValue);
console.log(zero);
function incrementByOne (number) {
    number = number + 1;
    zero = zero + 1;
    return number;
}
*/

/*
// we can't declare and use two functions with same name it will give error that 
    "function already defined "
function add (number1, number2) {
    return number1 + number2;
}
function add1 (number1, number2, number3) {
    return number1 + number2 + number3;
}
const additionOfTwoNumbers = add(4,5);
console.log(additionOfTwoNumbers);
const additionOfThreeNumbers = add(4);
console.log(additionOfThreeNumbers);
*/

/*
//  we cannot use variable name and function name same it will give an error that
    "it has already  been declared"
function factorial (number) {
    let factorialOfNumber = 1;
    for (let candidate = number; candidate > 0; candidate--) {
        factorialOfNumber = factorialOfNumber * candidate; 
    }
    return factorialOfNumber;
}
const factorial = factorial(6);
console.log(factorial);
*/

/* 
//  we can use same variable names inside and outside functions beacuse their sco
    -pe is different 
let number = 5;
function incrementByOne (number) {
    console.log(number);
    number = number + 1;
    return number
}
console.log(number);
let incrementedValue = incrementByOne(6);
console.log(incrementedValue);
*/
