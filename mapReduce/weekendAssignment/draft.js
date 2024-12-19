function asd(characters) {
  let index = -1;
  return function () {
    index++;

    if (index >= characters.length) {
      index = 0;
    }
    
    return characters[index];
  }
}

const chars = ['*', '-', ' '];
const nextChar = asd(chars);