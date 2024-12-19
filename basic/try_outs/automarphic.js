const a = 1;
let number = a;
let square = number * number;
let isAutomarphic = false;
while (number >= 1 && square >= 1) {
    isAutomarphic = false;
    let digitOfNumber = number % 10;
    let digitOfSquare = square % 10;
    if (digitOfNumber == digitOfSquare) {
        number = (number - digitOfNumber) / 10;
        square = (square - digitOfSquare) / 10; 
        isAutomarphic = true;
        continue;
    }
    break;
}
console.log(isAutomarphic);
