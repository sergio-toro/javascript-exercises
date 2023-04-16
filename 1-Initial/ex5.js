// //SORT
// function getTheHighestValue (array, age) {
//     array.sort((a, b) =>  b.age - a.age)
//     return array [0]
// }

// const result = getTheHighestValue([
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 20 },
//   ])
// console.log(result)

// ARROWFUNCTION
const getTheHighestValue = (array) => {
  array.sort((a, b) => b.age - a.age);
  return array[0];
};

const result = getTheHighestValue([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
]);
console.log(result);

// //SORT SENSE MUTAR L'ORIGINAL
// function getTheHighestValue (array, age) {
//     const sorted = [...array].sort((a, b) =>  b.age - a.age)
//     return sorted [0]
// }

// const result2 = getTheHighestValue([
//           { name: "Alice", age: 25 },
//           { name: "Bob", age: 30 },
//           { name: "Charlie", age: 20 },
//         ])
// console.log(result2)
