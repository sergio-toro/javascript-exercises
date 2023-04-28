const todoForm$$ = document.querySelector(".todo-form");
const selectContainer$$ = document.createElement("div");
todoForm$$.appendChild(selectContainer$$);
const filterOption$$ = document.createElement("select");
filterOption$$.className = "filter-todo";
selectContainer$$.appendChild(filterOption$$);
filterOption$$.innerHTML = `
<option value="All">All</option>
<option value="Complete">Complete</option>
<option value="Incomplete">Incomplete</option>
`;
//

const todoInput$$ = document.querySelector(".input");
const todoButton$$ = document.querySelector(".add-button");
const todoList$$ = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton$$.addEventListener("click", addTodo);
todoList$$.addEventListener("click", deleteCheck);
filterOption$$.addEventListener("change", filterTodo);

function addTodo(e) {
  e.preventDefault();
  const todoDiv$$ = document.createElement("div");
  todoDiv$$.className = "todo-div";

  const newTodo$$ = document.createElement("li");
  newTodo$$.className = "todo-item";
  newTodo$$.innerText = todoInput$$.value;

  todoDiv$$.appendChild(newTodo$$);

  //ADDING TO LOCAL STORAGE
  // saveLocalTodos(todoInput$$.value);

  //COMPLETED BUTTON
  const completedButton$$ = document.createElement("button");
  completedButton$$.innerHTML = "Done";
  completedButton$$.className = "completed-button";
  todoDiv$$.appendChild(completedButton$$);
  //REMOVE BUTTON
  const removeButton$$ = document.createElement("button");
  removeButton$$.innerHTML = "Remove";
  removeButton$$.className = "remove-button";
  todoDiv$$.appendChild(removeButton$$);

  todoList$$.appendChild(todoDiv$$);
  todoInput$$.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "remove-button") {
    const todo = item.parentElement;
    todo.classList.add("slide");

    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "completed-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList$$.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv$$ = document.createElement("div");
    todoDiv$$.className = "todo";
    const newTodo$$ = document.createElement("li");
    newTodo$$.className = "todo-item";
    newTodo$$.innerText = todo;
    todoDiv$$.appendChild(newTodo$$);

    const completedButton$$ = document.createElement("button");
    completedButton$$.className = "complete-button";
    completedButton$$.innerHTML = "Done";
    todoDiv$$.appendChild(completedButton$$);

    const removeButton$$ = document.createElement("button");
    removeButton$$.className = "remove-button";
    removeButton$$.innerHTML = "Remove";
    todoDiv$$.appendChild(removeButton$$);

    todoList$$.appendChild(todoDiv$$);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);

  localStorage.setItem("todos", JSON.stringify(todos));
}
