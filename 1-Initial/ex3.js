//ARRAY.FILTER
function getUniqueElementsFromBothArrays(a1, a2) {
  const newArray = a1.concat(a2);
  const nonRepeatedArray = newArray.filter((item, index) => {
    return newArray.indexOf(item) === index;
  });
  return nonRepeatedArray;
}

const result = getUniqueElementsFromBothArrays([1, 2, 3], [3, 4, 5]);
console.log(result);

console.log(getUniqueElementsFromBothArrays([4, 2, 7], [2, 4, 8]));

//SET
function getUniqueElementsFromBothArrays2(arr1, arr2) {
  const newArray2 = arr1.concat(arr2);
  const nonRepeatedArray2 = new Set(newArray2);
  let result = [...nonRepeatedArray2];
  return result;
}

const result2 = getUniqueElementsFromBothArrays2([1, 2, 3], [3, 4, 5]);
console.log(result2);

//FOREACH
function getUniqueElementsFromBothArrays3(array1, array2) {
  const newArray3 = array1.concat(array2);
  const result = [];
  newArray3.forEach((item) => {
    if (!newArray3.includes(item)) {
      newArray3.push(item);
    }
  });
  return result;
}

const result3 = getUniqueElementsFromBothArrays3([1, 2, 3], [3, 4, 5]);
console.log(result3);
