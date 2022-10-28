// Selectors
const todo = document.querySelector(".todo");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

todo.focus();

// Event listeners
addBtn.addEventListener("click", addTodo);

// Functions

function addTodo(e) {
  e.preventDefault();

  // create "text" element
  const todoTextNode = document.createTextNode(todo.value);
  const text = document.createElement("p");
  text.appendChild(todoTextNode);
  text.classList.add("text");

  // create "finish-btn" element
  const finishBtnTextNode = document.createTextNode("finish");
  const finishBtn = document.createElement("button");
  finishBtn.appendChild(finishBtnTextNode);
  finishBtn.classList.add("finish-btn");

  // create "delete-btn" element
  const deleteBtnTextNode = document.createTextNode("delete");
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(deleteBtnTextNode);
  deleteBtn.classList.add("delete-btn");

  // create "todo-item" element
  const todoItem = document.createElement("div");
  todoItem.appendChild(text);
  todoItem.appendChild(finishBtn);
  todoItem.appendChild(deleteBtn);
  todoItem.classList.add("todo-item");

  // insert "todo-item" into "todo-list"
  todoList.appendChild(todoItem);

  // auto focus
  todo.value = "";
  todo.focus();
}
