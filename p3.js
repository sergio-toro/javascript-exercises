const add$$ = document.getElementById("add");
const todoContainer$$ = document.querySelector(".todos");
const input$$ = document.getElementById("input");

add$$.addEventListener("click", function () {
  const li$$ = document.createElement("li");
  li$$.className = "todo-item";
  todoContainer$$.appendChild(li$$);

  li$$.innerHTML += `
  <span class="span">${input$$.value}</span>
  <div class="actions"></div>
  `;
  const actions$$ = li$$.querySelector(".actions");
  actions$$.appendChild(addDeleteBtn());
  actions$$.appendChild(modifyBackgroundColor());
  actions$$.appendChild(crossCompletedTodos());
  input$$.value = "";
});

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

function modifyBackgroundColor() {
  const selector$$ = document.createElement("select");
  selector$$.className = "background-change";
  selector$$.innerHTML = `
  <option value="#f0ebeb">Default</option>
  <option value="#ffd6d6">Red</option>
  <option value="#ffe066">Yellow</option>
  <option value="#b4f7d8">Green</option>
  <option value="#c9caf2">Purple</option>
  `;

  selector$$.addEventListener("change", (e) => {
    const backgroundColor = document.querySelector(".span");

    const item$$ = e.target.closest(".todo-item");
    const span$$ = item$$.querySelector("span");

    console.log("variales", {
      item$$,
      span$$,

      backgroundColor,
    });

    span$$.style.backgroundColor = e.target.value;
  });
  return selector$$;
}
