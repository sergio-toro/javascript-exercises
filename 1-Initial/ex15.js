//FUNCTION
function getNumberOfProperties(properties) {
  const numberOfProperties = Object.keys(properties);
  return numberOfProperties.length;
}

const result = getNumberOfProperties({ a: 1, b: 2, c: 3 });
console.log(result);

//AF
getNumberOfProperties = (properties) => Object.keys(properties).length;
const result2 = getNumberOfProperties({ a: 1, b: 2, c: 3 });
console.log(result2);
