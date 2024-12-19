const roverX = 5;
const roverY = 5;
const heading = 1;
const instructions = 31312333113;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let xAxis = roverX;
let yAxis = roverY;
let direction = heading;
let instruction = instructions;
let reverseInstruction = 0;
while (instruction > 0) {
    let rightMostDigit = instruction % 10;
    reverseInstruction = (reverseInstruction * 10) + rightMostDigit;
    instruction = (instruction - rightMostDigit) / 10;
}

while (reverseInstruction > 0) {
    instruction = reverseInstruction % 10;
    reverseInstruction = (reverseInstruction - instruction) / 10;
    if (instruction === 1) {
        direction = (direction + 3) % 4;
    }
    if (instruction === 2) {
        direction = (direction + 1) % 4;
    }
    if (instruction === 3 && direction === 1) {
        xAxis += 1;
    }
    if (instruction === 3 && direction === 2) {
        yAxis -= 1;
    }
    if (instruction === 3 && direction === 3) {
        xAxis -= 1;
    }
    if (instruction === 3 && direction === 0) {
        yAxis += 1;
    }
}
console.log(xAxis, yAxis, direction);



