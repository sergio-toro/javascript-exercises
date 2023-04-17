//SORT
function turnIntoDescending(array) {
  const descendingList = (a, b) => b - a;
  array.sort(descendingList);
  return array;
}

const result = turnIntoDescending([3, 1, 4, 1, 5, 9, 2, 6, 5]);
console.log(result);
