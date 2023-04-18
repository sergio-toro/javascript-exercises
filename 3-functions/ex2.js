const numbers = [1, 2, 3, 4, 5];
//FOR
function sumEvenNumbers(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      sum += numbersArray[i];
    }
  }
  return sum;
}

//FOREACH
function sumEvenNumbers(numbersArray) {
  let sum = 0;
  numbersArray.forEach((number) => {
    if (number % 2 === 0) {
      sum += number;
    }
  });
  return sum;
}

const result = sumEvenNumbers(numbers);
console.log(result);
