// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 19;
const endOfRange = 20;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let numberOfFactors = 0;
for (let currentNumber = startOfRange; currentNumber <= endOfRange; currentNumber++) {
    for (let factor = 1; factor <= currentNumber; factor++) {
        if (currentNumber % factor == 0) {
            numberOfFactors = numberOfFactors + 1;
        }
    }
    if (numberOfFactors == 2) {
        console.log(currentNumber);
    }
    numberOfFactors = 0;
}
    
        
            
        

    
   
       
    

