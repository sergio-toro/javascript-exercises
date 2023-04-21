## Prompt for ChatGPT:

Please give me a javascript and html exercise, it should meet the following criteria:

- Should be easy to understand for beginners.
- Should teach concepts for order of execution, DOM updates
- It should be a counter application


## Counter Project 

In this exercise, we have a simple HTML file with a heading, two buttons, and a script tag that links to the JavaScript file.


### 1. Render the template

Create a function that renders the counter template, it must contain title and 2 buttons to increment or decrement the value, the HTML should look like this:

```html
<div id="app">
  <h1 id="counter">0</h1>
  <button id="increment-btn">Increment</button>
  <button id="decrement-btn">Decrement</button>
</div>
```


### 2. Register the event listeners

Create a function that selects the `counter`, `increment-btn` and `decrement-btn` elements using their ID values. It then defines a `count` variable to keep track of the current count value.

It also defines three functions:
- `updateCounter()` which updates the text content of the `counter` element with the current count value.
- `incrementCounter()` which increments the value of the `count` variable by 1 and calls the `updateCounter()` function to update the DOM with the new count value.
- `decrementCounter()` which decrements the value of the `count` variable by 1 and calls the `updateCounter()` function to update the DOM with the new count value.

Finally, the script adds event listeners to the `incrementBtn` and `decrementBtn` elements that call the `incrementCounter()` and `decrementCounter()` functions respectively when clicked.
