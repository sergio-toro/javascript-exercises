const todoInput$$ = document.querySelector(".input");
const addButton$$ = document.querySelector(".add-button");
const todoList$$ = document.querySelector(".todo-list");

addButton$$.addEventListener("click", addTodo);
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

function addDeleteBtn() {
  const deleteBtn$$ = document.createElement("button");
  deleteBtn$$.textContent = "Remove";
  deleteBtn$$.className = "remove-btn";

  deleteBtn$$.addEventListener("click", (e) => {
    const item$$ = e.target.closest(".todo-item");
    todoContainer$$.removeChild(item$$);
  });
  return deleteBtn$$;
}
