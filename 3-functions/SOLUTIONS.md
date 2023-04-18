## Solutions

### 1. Calculate Total Order Price

This function simply iterates over the order array and adds up the price of each item to a running total price. Once all items have been added up, it returns the total price. This exercise uses basic concepts of arrays, objects, functions and iterators.

```js
function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (let i = 0; i < order.length; i++) {
    totalPrice += order[i].price;
  }
  return totalPrice;
}
```

### 2. Sum even numbers

```javascript
function sumEvenNumbers(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      sum += numbersArray[i];
    }
  }
  return sum;
}
```

### 2. Factorial

```js
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

### 3. Calculate Sum and Average

```js
function calculate(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  return { sum, average };
}
```

### 4. Filter Books

```js
function getBooksByAuthor(booksArray, authorName) {
  return booksArray.filter((book) => book.author === authorName);
}
```

### 5. All Students grades

To solve this exercise, you can use a loop to iterate through the array of objects and calculate the average grade for each student using another loop to iterate through the `grades` array. You can then sum all the averages and divide by the length of the array to get the overall average.

```javascript
function calculateAverageGrade(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    let studentTotal = 0;
    for (let j = 0; j < grades[i].grades.length; j++) {
      studentTotal += grades[i].grades[j];
    }
    const studentAvg = studentTotal / grades[i].grades.length;
    total += studentAvg;
  }
  return total / grades.length;
}
```
