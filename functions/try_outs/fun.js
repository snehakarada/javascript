function checkPrime (number) {
    let numberOfFactors = 0;
    let prime = true;
    for (let factors = 1; factors <= number; factors++) {
        if (number % factors === 0) {
            numberOfFactors = numberOfFactors + 1; 
        }
        if (numberOfFactors > 2) {
            prime = false;
            break;
        }
    }
    return prime;
}
const isPrime = checkPrime(6);
console.log(isPrime);
