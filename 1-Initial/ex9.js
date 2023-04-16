//OBJECT.KEYS + INCLUDES
function isTheGivenKeyInTheObject(data, parameter) {
  const keys = Object.keys(data);
  return keys.includes(parameter);
}

const result = isTheGivenKeyInTheObject({ a: 1, b: 2, c: 3 }, "b");
console.log(result);

//HASOWNPROPERTY
function isTheGivenKeyInTheObject(data, parameter) {
  return data.hasOwnProperty(parameter);
}

const result2 = isTheGivenKeyInTheObject({ a: 1, b: 2, c: 3 }, "b");
console.log(result2);
