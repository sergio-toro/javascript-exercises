function returnTheKeys(data) {
  const keys = Object.keys(data);
  return keys;
}

const result = returnTheKeys({ a: 1, b: 2, c: 3 });
console.log(result); //['a', 'b', 'c']
