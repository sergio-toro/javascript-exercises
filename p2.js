//empty array for the new todo items
let todoItems = [];
//create new todo object
function addTodo(text) {
  const todo = {
    text,
  };
  //push the text in the todoItems array
  todoItems.push(todo);
  console.log(todoItems);
}

//Select form element
const form$$ = document.querySelector(".todo-form");
const add$$ = document.querySelector("#button");
add$$.addEventListener("click", (event) => {
  event.preventDefault();
});

//Select the text input
const input$$ = document.querySelector("#input");

//Get the value of the input and remove whitespace
const text = input$$.value.trim();
if (text !== "") {
  addTodo(text);
  input$$.value = "";
  input$$.focus();
}

// function main() {
//   const app$$ = document.querySelector("#app");
// }

// main();
