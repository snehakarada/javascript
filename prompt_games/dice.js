// ┓
// ┏
// ┛ 
// ┗
// ━	
const middleDot = '┃  ⚪️  ┃';
const leftDot = '┃⚪️    ┃';
const rightDot = '┃    ⚪️┃';
const twoDots = '┃⚪️  ⚪️┃';
const noDots = '┃      ┃';

function repeat(char, length) {
  let repeatedChar = '';
  for (let index = 0; index <= length; index++) {
    repeatedChar += char;
  }
  return repeatedChar;
}

function getMiddleValue(number) {
  switch (number) {
    case 1: return noDots + '\n' + middleDot + '\n' + noDots + '\n';
    case 2: return noDots + '\n' + twoDots + '\n' + noDots + '\n';
    case 3: return leftDot + '\n' + middleDot + '\n' + rightDot + '\n';
    case 4: return twoDots + '\n' + noDots + '\n' + twoDots + '\n';
    case 5: return twoDots + '\n' + middleDot + '\n' + twoDots + '\n';
    case 6: return twoDots + '\n' + twoDots + '\n' + twoDots + '\n';
  }
}


function diceValue(number) {
  const top = '┏' + repeat('━', 5) + '┓\n';
  const bottom = '┗' + repeat('━', 5) + '┛';
  const middle = getMiddleValue(number);

  return top + middle + bottom;
}

function wait() {
  for (let i = 0; i <= 100000000; i++) {}
}



function rotateDice(times) {
  wait();
  console.clear();
  const number = Math.ceil(Math.random() * 6);
  console.log(diceValue(number));
  if (times === 0) {
    return '';
  }
  return rotateDice(times - 1);
}

console.log(rotateDice(10));



