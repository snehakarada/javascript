const format = 'mm-dd--yyyy';
const date = '12-66-2006';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const valid = true;
const invalid = false;
let index = 0;
let isItValid = valid;
let countY = 0;

while (index < format.length) {

  if ((format[index] !== 'y' && format[index] !== 'm') && (format[index] !== 'd' && format[index] !== '-')) {
    isItValid = invalid;
    console.log("invalid");
    break;
  }
  index++;
}

if (isItValid && date.length !== 10) {
  isItValid = invalid;
  console.log("invalid");
}

if (isItValid) {
  let countM = 0;
  let countD = 0;
  for (index = 0; index < format.length; index++) {
    switch (format[index]) {
      case 'y':
        countY = countY + 1;
        break;
      case 'm':
        countM = countM + 1;
        break;
      case 'd':
        countD = countD + 1;
    }
  }
  if (countY !== 4 || countM !== 2 || countD !== 2) {
    isItValid = invalid;
    console.log("invalid");
  }
}

if (isItValid) {
  let datePart1Count = 0;
  let datePart1 = '';
  index = 0;
  if (format[0] === 'y') {
    while (date[index] !== '-' && index < date.length) {
      datePart1Count = datePart1Count + 1;
      datePart1 = datePart1 + date[index]
      index++;
    }
    if (format[0] === 'y' && countY !== datePart1Count) {
      isItValid = invalid;
      console.log("invalid");
    }
    if (format[5] === 'm')
      if (format[0] === 'm' && datePart1 > 12) {
        isItValid = invalid;
        console.log("invalid");
      }
    if (format[0] === 'd' && datePart1 > 31) {
      isItValid = invalid;
      console.log("invalid");
    }
  }
  if (isItValid) {
    console.log("valid");
  }
}
