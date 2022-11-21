import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteBtn.js";
import { displayTask } from "./readTaks.js";

export const addTask = (evento) => {
  evento.preventDefault(); //  formulario

  const list = document.querySelector("[data-list]"); //  trae la lista, donde se genera las tareas
  const input = document.querySelector("[data-form-input]"); // el input donde llena con el titulo que quiere hacer
  const calendar = document.querySelector("[data-form-date]"); // calendario, selecciona la fecha

  const value = input.value; // valor del input, el texto que puso el usuario
  const date = calendar.value; // la fecha, en un formato
  const dateFormat = moment(date).format("DD/MM/YYYY"); // console.log(moment(date).format("DD/MM/YYYY")); // esta toma la libreria importada que toma o recibe la fecha que queremos dar formato, y despues el tipo de formato

  if (value === "" || date === "") {
    return; // regresa, y no deja que se ejecute el codigo de aqui para abajo
  }

  input.value = ""; // LIMPIAR
  calendar.value = ""; // LIMPIAR

  const complete = false;

  const taskObj = {
    value,
    dateFormat,
    complete, 
    id: uuid.v4(), 
  }; 

  list.innerHTML = ""; // ´por cada una de las tareas que se estan agregando, va adecir que su estructura es 0, es un string vacio, despues readTask se encarga de agregar cada una de las tareas

  const taskList = JSON.parse(localStorage.getItem("tasks")) || []; 
  taskList.push(taskObj); 
  localStorage.setItem("tasks", JSON.stringify(taskList)); 

  displayTask(); 
};

export const createTask = ({ value, dateFormat, complete, id }) => {
  //se destrutura el obj de createTasks
  // const que recibe el objeto
  const task = document.createElement("li"); // genera un elemneto de tipo li
  task.classList.add("card"); // agregar una clase llamda card
  //backticks
  const taskContent = document.createElement("div"); // crear un elemento div

  const check = checkComplete(id); // se modifico la funcion

  if (complete) {
    check.classList.toggle("far");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  } // si complete es true se agregan estas clases css

  const titleTask = document.createElement("span"); // gnerar un elemento de tipo span
  titleTask.classList.add("tasks");
  titleTask.innerText = value; // le agregamos el texto que escribio el ususario
  taskContent.appendChild(check); // agregamos hijos ya hicimos la tarea
  taskContent.appendChild(titleTask); // titulo
  // task.innerHTML = content;
  const dateElement = document.createElement("span"); // creamos span
  dateElement.innerHTML = dateFormat; // console.log(dateElement); // <span>DD/MM/YYYY</span> // le agregamos el inner con la fecha  que estamos recibiendo como parametro

  task.appendChild(taskContent); // agregar hijos a padres
  task.appendChild(dateElement);
  task.appendChild(deleteIcon(id));

  return task; // retorna toda la estructura html, regresamos la tarea
}; // crear estructura html, tomar datos y ubicarlos donde corresponden
