function getnumberOfProperties(properties) {
  const numberOfProperties = Object.keys(properties);
  return numberOfProperties;
}

const result = getnumberOfProperties({ a: 1, b: 2, c: 3 });
console.log(result);
