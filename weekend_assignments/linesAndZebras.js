let lionPos = -1;


function findingZebrasInJungle(index, jungle) {
  if (index === jungle.length) {
    return false;
  }

  if (jungle[index] === 'Z') {
    return true;
  }

  return findingZebrasInJungle(index + 1, jungle)
}

function findingLionsInJungle(index, jungle) {
  if (index === jungle.length) {
    return false;
  }

  if (jungle[index] === 'L') {
    return true;
  }

  return findingLionsInJungle(index + 1, jungle);
}

function _findPosOfZebraInDanger(jungle, index, nextPos) {
  if (index === jungle.length) {
    return _findPosOfZebraInDanger(jungle, 0, nextPos + 1);
  }

  if (jungle[index] === 'Z' && jungle[index + nextPos] === 'L') {
    lionPos = index + nextPos;
    return index;
  }

  if (jungle[index] === 'L' && jungle[index + nextPos] === 'Z') {
    lionPos = index;
    return index + nextPos;
  }

  return _findPosOfZebraInDanger(jungle, index + 1, nextPos);
}

function findPosOfZebraInDanger(jungle) {
  const isJungleHasZebras = findingZebrasInJungle(0, jungle);
  const isJungleHasLions = findingLionsInJungle(0, jungle);

  if (isJungleHasLions && isJungleHasZebras) {
    return _findPosOfZebraInDanger(jungle, 0, 1);
  }

  return -1;
}

// console.log(findPosOfZebraInDanger('Z')); // -1
// console.log(findPosOfZebraInDanger('L')); // -1
// console.log(findPosOfZebraInDanger('LZ')); // 1
// console.log(findPosOfZebraInDanger('ZL')); // 0
// console.log(findPosOfZebraInDanger('L Z  LZ')); // 6
// console.log(findPosOfZebraInDanger('LZ  LZ')); // 1
// console.log(findPosOfZebraInDanger('L Z')); //2
console.log(findPosOfZebraInDanger('L  Z  L Z')); // 8
// console.log(findPosOfZebraInDanger('L  XZ  L Z'));




function animation(newJungle) {
  for (let index = lionPos; index < newJungle.length; index += 2) {
    console.log(index);
    if (newJungle[index] === '🦁') {
      lionPos = index;
      break;
    }
  }
  console.log(newJungle[12])

  console.log('animal', newJungle[lionPos]);
  return lionPos;
}

console.log(visual('L__Z__L_Z'));
