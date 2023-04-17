//MAP
function convertToUpperCase(array) {
  const newArray = array.map((name) => name.toUpperCase());
  return newArray;
}

const result = convertToUpperCase(["apple", "banana", "pear"]);
console.log(result);

//FOREACH
function convertToUpperCase2(array) {
  let newArray = [];
  array.forEach((name) => name.toUpperCase());
  return newArray;
}

const result2 = convertToUpperCase2(["apple", "banana", "pear"]);
console.log(result2);

//FOR
function convertToUpperCase3(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    newArray.push(name.toUpperCase());
  }
  return newArray;
}

const result3 = convertToUpperCase3(["apple", "banana", "pear"]);
console.log(result3);
