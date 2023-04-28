const todoList = [
  {
    name: "#1 thing to do",
    background: "#ffe066",
  },
  {
    name: "#2 thing to do",
    background: null,
  },
  {
    name: "#3 thing to do",
    background: "#b4f7d8",
  },
];

renderTodoItems();
registerAddButtonListener();

registerRemoveButtonListener();
registerChangeBackgroundListener();

function renderTodoItems() {
  const todoContainer$ = document.querySelector("ul.todo-list");

  let todoItemsTemplate = "";
  todoList.forEach((item, index) => {
    todoItemsTemplate += getTodoItemTemplate(item, index);
  });
  // const todoItemsTemplate = todoList.map(getTodoItemTemplate).join("");
  todoContainer$.innerHTML = todoItemsTemplate;
}

function getTodoItemTemplate(item, index) {
  const colors = [
    { name: "Default", value: null },
    { name: "Red", value: "#ffd6d6" },
    { name: "Yellow", value: "#ffe066" },
    { name: "Green", value: "#b4f7d8" },
    { name: "Purple", value: "#c9caf2" },
    { name: "Blue", value: "blue" },
  ];
  let colorsTemplate = "";
  colors.forEach((color) => {
    colorsTemplate += `
      <option
        ${item.background === color.value ? "selected" : ""}
        value="${color.value}"
      >
        ${color.name}
      </option>
    `;
  });
  // TODO: Modify template to use item.background
  return `
    <li class="todo-item" data-index="${index}">
      <span style="background: ${item.background}">
      ${item.name}</span>
      <div>
      <button class="remove-button">Remove</button>
      <select class="background-change">
        <option value="#f0ebeb">Default</option>
        ${colorsTemplate}
      </select>
    </div>
    </li>
  `;
}

function registerChangeBackgroundListener() {
  const todoContainer$ = document.querySelector("ul.todo-list");

  todoContainer$.addEventListener("change", (event) => {
    const changeBackground =
      event.target.classList.contains("background-change");
    if (changeBackground) {
      const todoItem$ = event.target.closest("li.todo-item");
      const index = todoItem$.dataset.index;

      todoList[index].background = event.target.value;

      console.log("todoList item changed", index, todoList);

      renderTodoItems();
    }
  });
}

function registerRemoveButtonListener() {
  const todoContainer$ = document.querySelector("ul.todo-list");

  todoContainer$.addEventListener("click", (event) => {
    const isDeleteButton = event.target.classList.contains("remove-button");
    if (isDeleteButton) {
      const todoItem$ = event.target.closest("li.todo-item");
      const index = todoItem$.dataset.index; // "index" is defined on the template as data-index

      todoList.splice(index, 1);

      console.log("todoList item deleted", todoList);
      renderTodoItems();
    }
  });
}

function registerAddButtonListener() {
  const addButton$ = document.querySelector(".add-button");
  addButton$.addEventListener("click", (event) => {
    // Prevents the form submit and reload the page
    event.preventDefault();

    const input$ = document.querySelector("input.input");
    const value = input$.value;

    if (value) {
      todoList.push({
        name: value,
        background: null,
      });

      console.log("todoList item added", todoList);
      renderTodoItems();
      input$.value = "";
    }
  });
}
