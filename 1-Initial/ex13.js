function getAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  return average;
}

const result = getAverage([1, 2, 3, 4, 5]);
console.log(result);

function getAverage(numbers) {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  const average = sum / numbers.length;
  return average;
}
const result2 = getAverage([1, 2, 3, 4, 5]);
console.log(result2);
