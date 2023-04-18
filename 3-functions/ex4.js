//FOR
function calculate(array) {
  let sum = 0;
  let average;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;
  return { sum, average };
}

//FOREACH
function calculate(array) {
  let sum = 0;
  let average;
  array.forEach((number) => {
    sum += number;
  });
  average = sum / array.length;
  return { sum, average };
}

const numbers = [1, 2, 3, 4, 5];
const result = calculate(numbers);
console.log(result);
