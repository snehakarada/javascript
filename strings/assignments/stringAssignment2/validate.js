const format = 'yyyy-mm-dd';
const date = '0000-04-04';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let isItValid = true;
if (format !== 'yyyy-mm-dd' && format !== 'dd-mm-yyyy' && format !== 'mm-dd-yyyy') {
  isItValid = false;
}

if (date.length !== 10 || date.length > 10) {
  isItValid = false;
}
let isLeap = false;
let has31Days = false;
let has30Days = false;
let has28Days = false;
if (format[0] === 'm') {
  let isValidMonth = +date[0] + date[1];
  console.log(isValidMonth);
  if (isValidMonth > 12 || isValidMonth < 1) {
    isItValid = false;
  }
  switch (isValidMonth) {
    case 1:
    case 3:
    case 5:
    case 6:
    case 7:
    case 10:
    case 12:
      has31Days = true;
      break;
    case 2:
      has28Days = true;
      break;
    default:
      has30Days = true;
  }
  let givenDate = +date[3] + date[4];
  let givenYear = +date[6] + date[7] + date[8] + date[9];
  const isDivivsibleBy400 = datePart1 % 400 === 0;
  const isDivivsibleBy100 = datePart1 % 100 === 0;
  const isDivivsibleBy4 = datePart1 % 4 === 0;
  isLeap = (isDivivsibleBy4 && !isDivivsibleBy100) || isDivivsibleBy400
  if (givenDate > 31 || givenDate < 1) {
    isItValid = false;
  }
  if (has30Days && givenDate > 30) {
    isItValid = false;
  }
  if (has31Days && givenDate > 31) {
    isItValid = false;
  }
  if (isLeap && has28Days && givenDate > 29) {
    isItValid = false;
  }
  if (has28Days && givenDate > 28) {
    isItValid = false;
  }
  if (givenYear === '0000') {
    isItValid = false;
  }
}

if (format[0] === 'y') {
  let givenYear = +date[0] + date[1] + date[2] + date[3];
  let givenMonth = +date[5] + date[6];
  let givenDate = +date[8] + date[9];

  const isDivivsibleBy400 = datePart1 % 400 === 0;
  const isDivivsibleBy100 = datePart1 % 100 === 0;
  const isDivivsibleBy4 = datePart1 % 4 === 0;
  isLeap = (isDivivsibleBy4 && !isDivivsibleBy100) || isDivivsibleBy400;

  switch (givenMonth) {
    case 1:
    case 3:
    case 5:
    case 6:
    case 7:
    case 10:
    case 12:
      has31Days = true;
      break;
    case 2:
      has28Days = true;
      break;
    default:
      has30Days = true;
  }
  if (givenYear === '0000') {
    isItValid = false;
  }
  if (givenDate > 31 || givenDate < 1) {
    isItValid = false;
  }
  if (has30Days && givenDate > 30) {
    isItValid = false;
  }
  if (has31Days && givenDate > 31) {
    isItValid = false;
  }



}
const output = isItValid ? 'valid' : 'invalid';
console.log(output);