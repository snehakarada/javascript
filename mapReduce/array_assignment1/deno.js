function filterAbove(array, threshold) {
  const filteredArr = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filteredArr.push(array[index]);
    }
  }

  return filteredArr;
}

const filter1 = function (element,) {

}

const reducer = function (intial, number, index, array) {
  console.log('intial', intial, 'number', number, 'index', index, 'arr', array);
  if (number <= intial) {
    array.splice(index, 1, 0);
  }


  return intial;
}


const filter = function (arr, threshold) {
  console.log('array', arr);
  console.log('threshold', threshold);
  arrayRef(arr, threshold);
  console.log("arrrrr", arr);
}

const array = [1, 2, 3, 8]

console.log(filter(array, 5));
console.log('const array', array);
