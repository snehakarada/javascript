const a = 145;
let number = a;
let sum = 0;
let isSpecialNumber = false;
while (number > 0){
    let factorial = 1;
    let rightMostDigigt = number % 10;
    for (let digits = rightMostDigigt; digits > 0; digits--){
        factorial = factorial * digits; 
    }
    console.log(rightMostDigigt);
    console.log(factorial);    
    sum = sum + factorial;
    console.log(sum);
    number = (number - rightMostDigigt) / 10;
}
if (a === sum) {
    isSpecialNumber = true;
}
console.log(isSpecialNumber);