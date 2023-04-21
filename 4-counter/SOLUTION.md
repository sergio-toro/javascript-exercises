## Counter Application Exercise

### HTML File

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Counter Application</title>
  </head>
  <body>
    <h1 id="counter">0</h1>
    <button id="increment-btn">Increment</button>
    <button id="decrement-btn">Decrement</button>
    <script src="./script.js"></script>
  </body>
</html>
```

### JavaScript File

```js
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");

let count = 0;

function updateCounter() {
  counterElement.innerText = count;
}

function incrementCounter() {
  count++;
  updateCounter();
}

function decrementCounter() {
  count--;
  updateCounter();
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);
```
