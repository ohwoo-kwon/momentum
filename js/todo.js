const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(toDoObj) {
  const li = document.createElement("li");
  li.id = toDoObj.id;
  const span = document.createElement("span");
  span.innerText = toDoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "❌"
  btn.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handelToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}