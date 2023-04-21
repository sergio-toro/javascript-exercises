/* README: State of the application */
let count = 0;

function incrementCounter() {
  updateCounter(count + 1);
}
function decrementCounter() {
  updateCounter(count - 1);
}

export function updateCounter(number) {
  const counter = document.querySelector("#counter");
  counter.innerHTML = number;

  count = number;
  console.log(counter);
}

export function regiterCounterListeners() {
  const incrementBtn = document.querySelector("#increment-btn");
  const decrementBtn = document.querySelector("#decrement-btn");

  incrementBtn.addEventListener("click", incrementCounter);
  decrementBtn.addEventListener("click", decrementCounter);
}

export function getCounterTemplate() {
  const counterTemplate = `
    <h1 id="counter">0</h1>
    <button id="increment-btn">Increment</button>
    <button id="decrement-btn">Decrement</button
    `;
  return counterTemplate;
}
