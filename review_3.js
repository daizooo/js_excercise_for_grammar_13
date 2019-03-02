const myArray = {
  array: [1, 2, 3],
  forEach: function (callback) {
    for (let i = 0; i < this.array.length; i++) {
      callback(this.array[i], i);
    }
  },
  map: function (callback) {
    const newArray = [];
    this.forEach((value, index) => {
      const newValue = callback(value, index);
      newArray.push(newValue);
    });
    return newArray;
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

const forEachArray = myArray.forEach((value, index) => {
  console.log(index, value);
});

console.log(forEachArray);

const mappedArray = myArray.map((value, index) => {
  console.log(index, value);
  return value * index;
});

console.log(mappedArray);

const filteredArray = myArray.filter((value, index) => {
  console.log(index, value);
  return value % 2 !== 0;
});

console.log(filteredArray);
