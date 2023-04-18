//S1
function factorial(n) {
  let result;
  for (let i = n - 1; i >= 1; i--) {
    if (result === undefined) {
      result = n * i;
    } else {
      result *= i;
    }
  }
  if (n <= 1) {
    result = 1;
  }
  return result;
}
//S2
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result =  result * i;
  }
  return result;
}

console.log(factorial(7));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));
console.log(factorial(0));
