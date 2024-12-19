const roverX = 0;
const roverY = 0;
const heading = 0; 
const instructions = 32323232;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let xAxis = roverX;
let yAxis = roverY;
let direction = heading;
let commands = instructions;
let reverse = 0;
while (commands > 0) {
    const remainder = commands % 10;
    reverse = reverse * 10 + remainder;
    commands = (commands - remainder) / 10;
}
commands = reverse;
while (commands > 0) {
    const firstInstruction = commands % 10;
    commands = (commands - firstInstruction) / 10;
    if ((firstInstruction === 1 && direction === 0) || (firstInstruction === 2 && direction === 2)) {
        direction = 3;
        continue;
    }
    if ((firstInstruction === 1 && direction === 1) || (firstInstruction === 2 && direction === 3)) {
        direction = 0;
        continue;
    }
    if ((firstInstruction === 1 && direction === 3) || (firstInstruction === 2 && direction === 1)) {
        direction = 2;
        continue;
    }
    if ((firstInstruction === 1 && direction === 2) || (firstInstruction === 2 && direction === 0)) {
        direction = 1;
        continue;
    }
    if (firstInstruction === 3 && direction === 0) {
        yAxis = yAxis + 1;
        continue;
    }
    if (firstInstruction === 3 && direction === 1) {
        xAxis = xAxis + 1;
        continue;
    }
    if (firstInstruction === 3 && direction === 2) {
        yAxis = yAxis - 1;
        continue;
    }
    if (firstInstruction === 3 && direction === 3) {
        xAxis = xAxis - 1;
        continue;
    }
}
console.log(xAxis, yAxis, direction);
