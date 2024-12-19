const everyFun = function (element, index, array) {
  console.log('element', element, 'index', index, 'array', array);
  console.log(element, array[index + 1]);
  console.log(element < array[index + 1]);
  
  return element <= array[index + 1];
}

console.log([4, 2, 1].every(everyFun));