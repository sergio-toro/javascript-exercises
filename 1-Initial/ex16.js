//FOR
// function getEvenNumbers(numbers) {
//   const evenNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number % 2 === 0) evenNumbers.push(number);
//   }
//   return evenNumbers;
// }

// const result = getEvenNumbers([1, 2, 3, 4, 5]);
// console.log(result);

//FILTER
// function getEvenNumbers(array) {
//   return array.filter((number) => number % 2 === 0);
// }

// const result2 = getEvenNumbers([1, 2, 3, 4, 5]);
// console.log(result2);

//FOREACH
function getEvenNumbers(array) {
  const evenNumbers = [];
  array.forEach((number) => number % 2 === 0);

  return evenNumbers;
}

const result3 = getEvenNumbers([1, 2, 3, 4, 5]);
console.log(result3);
