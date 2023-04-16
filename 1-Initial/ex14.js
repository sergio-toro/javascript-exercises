function callTheOtherFunction(callback, message) {
  const message = "";
  callback(message);
}

const result = callTheOtherFunction(
  ((message) => console.log(message), "Hello, world!")
);
console.log(result);
