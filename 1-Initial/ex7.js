function returnValues(data) {
  const values = Object.values(data);
  return values;
}

const result = returnValues({ a: 1, b: 2, c: 3 });
console.log(result);
