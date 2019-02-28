const myArray = {
  array: [1, 2, 3],
  forEach: function (callback) {
    for (let i = 0; i < this.array.length; i++) {
      callback(this.array[i], i);
    }
  },
  map: function (callback) {
    const newArrayOfMap = [];
    this.forEach((value, index) => {
      const newValue = callback(value, index);
      newArrayOfMap.push(newValue);
    });
    return newArrayOfMap;
  },
  filter: function (callback) {
    const newArrayOfFilter = [];
    this.forEach((value, index) => {
      if (callback(value, index)) {
        newArrayOfFilter.push(value);
      }
    });
    return newArrayOfFilter;
  }
};

console.log(myArray.array);

myArray.forEach((value, index) => {
  console.log(index, value);
});

const returnedArrayOfMap = myArray.map((value, index) => {
  console.log(index, value);
  return value * index;
});

console.log(returnedArrayOfMap);

const returnedArrayOfFilter = myArray.filter((value, index) => {
  console.log(index, value);
  return value % 2 !== 0;
});

console.log(returnedArrayOfFilter);
