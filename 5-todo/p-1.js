//VARIABLES

//ATRIBUTS A VARIABLES
// input$$.setAttribute("id", "input");
// add$$.setAttribute("id", "add");

//EVENT LISTENER ---> ADD

const input$$ = document.querySelector("#input");
const add$$ = document.querySelector("#button");
const todoContainer$$ = document.querySelector(".todos");

function addTask(task) {
  task.preventDefault();

  const newItem$$ = document.createElement("li");
  newItem$$.classList.add("new-item");
  item$$.innerText = `${input$$.value}`;

  const newSpan$$ = document.querySelector(".todo-item");
  newSpan$$.innerText = input$$.value;

  if (input$$.value === "") {
    alert("Please enter a task");
  } else {
    newItem$$.appendChild(newSpan$$);
    todoContainer$$.appendChild(newItem$$);
  }
  input$$.value = "";
}
add$$.addEventListener("click", addTask);
