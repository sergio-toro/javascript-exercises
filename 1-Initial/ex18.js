//REDUCE
function getTheProduct(array) {
  const multiply = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  return multiply;
}

const result = getTheProduct([1, 2, 3, 4, 5]);
console.log(result);

//MAP
