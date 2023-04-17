## Prompt for ChatGPT:

Please give me a javascript exercise, it should meet the following criteria:

Should be easy to understand for beginners.
Should teach concepts for Arrays, Objects, Functions, Iterators.
Specify input (as code) and expected output (as code).

Sure, here's a simple exercise that meets your criteria:

## 1. Calculate Total Order Price

You are given an array of objects representing items in an order. Each object has two properties: `name` (string) and `price` (number). Write a function called `calculateTotalPrice` that takes in the array and returns the total price of the order.

### Inputs

```js
const order1 = [
  { name: "apple", price: 0.5 },
  { name: "banana", price: 0.25 },
  { name: "orange", price: 0.75 }
];

const order2 = [
  { name: "pizza", price: 9.99 },
  { name: "soda", price: 1.99 }
];
```

### Expected Outputs

```js
calculateTotalPrice(order1); // 1.50
calculateTotalPrice(order2); // 11.98
```

## 2. Sum even numbers
In this exercise:

- An array is used to store a list of numbers.
- A function is used to encapsulate logic for iterating over the array, checking each number to see if it's even, and adding the even numbers together.
- The `for` loop is used as an iterator to loop through the array and check each number.

The `sumEvenNumbers` function is designed to take an array of numbers as input. It returns the sum of all even numbers in the input array. In the example above, the `sumEvenNumbers` function is called with the `numbers` array. The expected output is the number `6`, which is the sum of `2` and `4`.

```javascript
// Define an array of numbers.
const numbers = [1, 2, 3, 4, 5];

// Define a function that takes an array of numbers as input and returns the sum of all even numbers in the array.
function sumEvenNumbers(numbersArray) {
  /* TODO: Implement the sum of even numbers */
}

// Call the function with the numbers array.
const result = sumEvenNumbers(numbers);

// Log the result to the console.
console.log(result); // Expected output: 6
```

## 3. Factorial
Write a function `factorial(n)` that takes in a positive integer `n` and returns its factorial.

The factorial of a number is the product of all positive integers from `1` to `n`.

For example:

```
factorial(5) => 5 * 4 * 3 * 2 * 1 => 120
factorial(3) => 3 * 2 * 1 => 6
factorial(1) => 1
```

In this solution, we initialize a variable called `result` to `1`, since the product of any number and `1` is itself. We then use a `for` loop to iterate over the range of numbers from `1` to `n`, multiplying each number with the running `result`. Finally, we return the final value of `result`.

Note that this solution assumes that `n` is a positive integer. If `n` is `0` or negative, the output will always be `1`, which may not be the desired behavior.

## 4. Calculate Sum and Average

Write a JavaScript function `calculate` that takes an array of numbers as input and returns an object with two properties: `sum` and `average`. The `sum` property should be the total sum of all the numbers in the array, and the `average` property should be the average of all the numbers in the array. 

### Inputs and Outputs:
#### Example 1:
```js
const numbers = [1, 2, 3, 4, 5];
const result = calculate(numbers);
console.log(result); // { sum: 15, average: 3 }
```

#### Example 2:
```js
const numbers = [10, 20, 30, 40, 50];
const result = calculate(numbers);
console.log(result); // { sum: 150, average: 30 }
```

In this solution, we're using a `for` loop to iterate over the array and add each number to a running total `sum`. We then divide the sum by the length of the array to calculate the average. Finally, we return an object with the `sum`∫ and `average`∫ properties.


## 5. Filter books
In this exercise, the `getBooksByAuthor` function is designed to take an array of book objects and an author name as input. 

It returns an array of book objects from the input array that were written by the specified author. In the example above, the `getBooksByAuthor` function is called with the `books` array and the author name "Jane Austen". 

The expected output is an array containing a single object, `{ title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }`, which is the only book in the input array that was written by Jane Austen.

- Arrays are used to store a list of book objects.
- Objects are used to represent book data, with properties for `title`, `author`, and `year`.
- Functions are used to encapsulate logic for filtering and mapping arrays of book objects based on certain criteria.
- Iterators are used implicitly through the use of `filter` and `map`, which iterate over arrays to produce new arrays.

```js
// Define an array of objects representing different books.
const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

// Define a function that takes an array of books and an author name as input and returns an array of book objects by that author.
function getBooksByAuthor(booksArray, authorName) {
	/* TODO: Implement the book filtering */
}

// Call the function with the books array and the author name to search for.
const result = getBooksByAuthor(books, "Jane Austen");

// Log the result to the console.
console.log(result); // Expected output: { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }

```

## 6. All Students Grades 
You are given an array of objects representing students' grades. Write a function `calculateAverageGrade` that takes in this array and returns the average grade for all students.

Each object in the input array has two properties:
- `name`: the name of the student (a string)
- `grades`: an array of numbers representing the student's grades

### Inputs
```javascript
const grades1 = [
  { name: 'John', grades: [80, 90, 100] },
  { name: 'Jane', grades: [75, 85, 95] },
  { name: 'Bob', grades: [60, 70, 80] }
];

const grades2 = [
  { name: 'Alice', grades: [90, 95] },
  { name: 'Bill', grades: [80, 85] },
  { name: 'Cathy', grades: [70, 75] },
  { name: 'Dave', grades: [60, 65] },
];
```

### Expected Outputs
```javascript
calculateAverageGrade(grades1); // 83.3
calculateAverageGrade(grades2); // 77.5
```

In this exercise, the inputs are two arrays of objects (`grades1` and `grades2`) representing students and their grades.

The expected output for `calculateAverageGrade(grades1)` is `83.3` because the average of `[80, 90, 100]`, `[75, 85, 95]`, and `[60, 70, 80]` is `83.3`. Similarly, the expected output for `calculateAverageGrade(grades2)` is `77.5` because the average of `[90, 95]`, `[80, 85]`, `[70, 75]`, and `[60, 65]` is `77.5`.


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
