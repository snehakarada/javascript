function multiplyedBy10(number) {
  return (number << 3) + (number << 1);
}

function multiplyedBy5(number) {
  return (number << 2) + (number << 0.5);
}

function multiplyedBy3(number) {
  return (number << 1) + (number << 0.5);
}

function multiplyedBy7(number) {
  return (number << 2) + (number << 1) + (number << 0);
}

function divisionBy3(number) {
  return (number >> 1) - (number >> 3) - (number >> 4);
}

// console.log(multiplyedBy10(100));
// console.log(multiplyedBy5(90));
// console.log(multiplyedBy3(900));
// console.log(multiplyedBy7(30));
console.log(divisionBy3(33));
