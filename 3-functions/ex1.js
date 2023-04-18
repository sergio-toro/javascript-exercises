//FOR
function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (let i = 0; i < order.length; i++) {
    totalPrice += order[i].price;
  }

  return totalPrice;
}

//FOREACH
function calculateTotalPrice(order) {
  let totalPrice = 0;
  order.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}

const order1 = [
  { name: "apple", price: 0.5 },
  { name: "banana", price: 0.25 },
  { name: "orange", price: 0.75 },
];
const result1 = calculateTotalPrice(order1);
console.log(result1);

const order2 = [
  { name: "pizza", price: 9.99 },
  { name: "soda", price: 1.99 },
];

const result2 = calculateTotalPrice(order2);
console.log(result2);
