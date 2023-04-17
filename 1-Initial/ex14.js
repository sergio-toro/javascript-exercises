function callTheOtherFunction(callback, message) {
  return callback(message);
}

const result = callTheOtherFunction(
  ((message) => console.log(message), "Hello, world!")
);
console.log(result);
