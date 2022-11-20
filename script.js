import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteBtn.js"; // este lleva la logica

const btn = document.querySelector("[data-form-btn]");

const addTask = (evento) => {
  const list = document.querySelector("[data-list]");
  const task = createTask(evento);
  list.appendChild(task); // En la lista agregame el elemento task
}; // Agregar tarea

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY"); // console.log(moment(date).format("DD/MM/YYYY")); //formato que queremos
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";
  //backticks
  const taskContent = document.createElement("div");

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat; // console.log(dateElement); // <span>DD/MM/YYYY</span>

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());

  return task; // retorna toda la estructura html
}; // crear estructura html, tomar datos y ubicarlos donde corresponden

//Arrow functions o funciones anonimas
btn.addEventListener("click", addTask);
