const strings = function (array) {
  console.log(array.map(function (element) {
    if (element.length <= 2) {
      return element;
    }

    return element[0] + (element.length - 2 + '') + element[element.length - 1];
  }));
}

console.log(strings(['cat', 'dog', 'gt', 'pencil', 'a', 'bhagya']));