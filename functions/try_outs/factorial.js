function factorial (number) {
    let factorialOfNumber = 1;
    for (let candidate = number; candidate > 0; candidate--) {
        factorialOfNumber = factorialOfNumber * candidate; 
    }
    return factorialOfNumber;
}
const output = factorial(6);
console.log(output);