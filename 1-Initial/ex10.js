function isTheValueInTheObject(data, property) {
  const value = Object.values(data);
  return value.includes(property);
}

const result = isTheValueInTheObject({ a: 1, b: 2, c: 3 }, 2);
console.log(result);
