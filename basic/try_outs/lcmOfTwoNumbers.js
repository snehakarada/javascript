let number1 = 36;
let number2 = 24;
let dupNumber1 = number1;
let dupNumber2 = number2;
let i = 2;
let LCM = 0;
let n = 0;
if (dupNumber1 < dupNumber2) {
  n = dupNumber1;
}
else {
  n = dupNumber2
}
for (i = 2; i <= dupNumber1 || i <= dupNumber2; i++) {
  if (dupNumber1 % i == 0 && dupNumber2 % i == 0) {
    dupNumber1 = dupNumber1 / i;
    dupNumber2 = dupNumber2 / i;
  }
  else {
    continue;
  }

}
if (n == i) {
  LCM = dupNumber1 * dupNumber2
}
else {
  LCM = dupNumber1 * dupNumber2 * (i - 1);
}
console.log("The lcm of", number1, "and", number2, "is", LCM);
