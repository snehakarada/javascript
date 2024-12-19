// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 4;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let i = 1;
let count = 0;
let isPrime = true;

while (i <= a) {
    if (a % i === 0) {
        count = count + 1;
    }
    if (count > 2) {
        isPrime = false;
        break;
    }
    i++;
}

console.log(isPrime);



/*let count = 0;
for(let i = 1;i <= a;i++){
    if(a % i == 0){
        count = count + 1;
    }
}
const isPrimeNumber = (count == 2);
console.log(isPrimeNumber);*/