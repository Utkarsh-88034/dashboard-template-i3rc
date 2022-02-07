function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function removeFromArray(arr, value) {
  arr.splice(arr.indexOf(value), 1);
  return arr;
}

function sumOfArray(arr) {
  let sum = 0;
  arr.map((item) => {
    sum += item;
  });
  return sum;
}

export { getKeyByValue, removeFromArray, sumOfArray };
