//FOR
// function multiplyForTen (numbers) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const multipilication = numbers[i] * 10;
//     newArray.push(multipilication);
//   }
//   return newArray;
// }

// const result = multiplyForTen([1, 2, 3, 4, 5]);
// console.log(result);

//FOR EACH
// function multiplyForTen(numbers) {
//     const newArray = [];
//     numbers.forEach (number => {
//         const result = number * 10;
//         newArray.push(result)
//     })
//     return newArray
// }

// const result = multiplyForTen([1, 2, 3, 4, 5])
// console.log(result)

// MAP
function multiplyForTen(numbers) {
  const newArray = numbers.map((x) => x * 10);
  return newArray;
}
const result = multiplyForTen([1, 2, 3, 4, 5]);
console.log(result);
