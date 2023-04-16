const fruits = ["apple", "banana", "pear", "kiwi", "orange"];

function getLargeNamedFruits(data) {
  const largeNamedFruits = data.filter((name) => name.length >= 5);
  return largeNamedFruits;
}

const getLargeNamedFruits2 = (data) => {
  const largeNamedFruits = data.filter((name) => name.length >= 5);
  return largeNamedFruits;
};

const result = getLargeNamedFruits(fruits);
console.log(result);

const result2 = getLargeNamedFruits2([
  "melon",
  "strawberry",
  "pear",
  "kiwi",
  "orange",
]);
console.log(result2);
