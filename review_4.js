function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

const array1 = [1, 2, 3];

each(array1, (value, index) => {
  console.log(index, value);
});

function map(array, callback) {
  const newArray = [];
  each(array, (value, index) => {
    const newValue = callback(value, index);
    newArray.push(newValue);
  });
  return newArray;
}

const array2 = [1, 2, 3];

const mappedArray = map(array2, (value, index) => {
  console.log(index, value);
  return value * 10;
});

console.log(mappedArray);

function filter(array, callback) {
  const newArrayOfFilter = [];
  each(array, (value, index) => {
    if (callback(value, index)) {
      newArrayOfFilter.push(value);
    }
  });
  return newArrayOfFilter;
}

const array3 = [1, 2, 3, 4, 5];

const filteredArray = filter(array3, (value, index) => {
  console.log(index, value);
  return value % 2 !== 0;
});

console.log(filteredArray);
