// function sumNumbers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//     }
//     return sum;
// }

// const result = sumNumbers([1, 2, 3, 4, 5])
// console.log(result)

//FOREACH
function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

const result = sumNumbers([2, 2, 2, 2, 2]);
console.log(result);
